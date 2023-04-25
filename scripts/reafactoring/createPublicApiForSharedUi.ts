import { Project } from 'ts-morph'
import path from 'path'
import { capitalize } from '@/shared/lib/capitalize'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')

project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const sharedUiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')

const sharedUiDirectory = project.getDirectory(sharedUiPath)

const componentDirectories = sharedUiDirectory?.getDirectories()

const isAbsolute = (value: string): boolean => {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
    return layers.some((layer) => value.startsWith(layer))
}

const promises = componentDirectories?.map(async (directory) => {
    const indexFilePath = path.join(directory.getPath(), 'index.ts')

    const indexFile = directory.getSourceFile(indexFilePath)

    if (indexFile) return

    const possiblesToReimport = [
        {
            path: path.join(
                directory.getPath(),
                'ui',
                `${directory.getBaseName()}.tsx`
            ),
            reimportPath: path.join('.', 'ui', directory.getBaseName()),
        },
        {
            path: path.join(
                directory.getPath(),
                `${directory.getBaseName()}.tsx`
            ),
            reimportPath: path.join('.', directory.getBaseName()),
        },
        {
            path: path.join(
                directory.getPath(),
                `${capitalize(directory.getBaseName())}.tsx`
            ),
            reimportPath: path.join('.', capitalize(directory.getBaseName())),
        },
    ]

    const forReimport = possiblesToReimport.find((candidate) => {
        return !!directory.getSourceFile(candidate.path)
    })

    if (!forReimport) return

    const { reimportPath } = forReimport

    const sourceCode = `export {${directory.getBaseName()}} from './${reimportPath}'`

    const file = directory.createSourceFile(indexFilePath, sourceCode, {
        overwrite: false,
    })

    await file.save()

    console.log(`created: ${indexFilePath}`)
})

Promise.all(promises ?? []).then(() => {
    files.forEach((sourceFile) => {
        const importDeclarations = sourceFile.getImportDeclarations()
        importDeclarations.forEach((importDeclaration) => {
            const value = importDeclaration.getModuleSpecifierValue()

            const valueWithoutAlias = value.replace('@/', '')

            const [layer, slice] = valueWithoutAlias.split('/')

            const isSharedUI = layer === 'shared' && slice === 'ui'

            if (!isAbsolute(valueWithoutAlias) || !isSharedUI) return

            const result = value.split('/').slice(0, 3).join('/')

            importDeclaration.setModuleSpecifier(`@/${result}`)
        })
    })
})

project.save().then(() => {
    console.log('DONE')
})
