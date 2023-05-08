import { type Node, Project, SyntaxKind } from 'ts-morph'

const featureNameToRemove = process.argv[2] // example isArticleEnabled

const featureState = process.argv[3] // example off/on

if (!featureNameToRemove) {
    throw new Error('Укажите название фича-флага')
}

if (!featureState || !['on', 'off'].includes(featureState)) {
    throw new Error('Укажите состояние фичи off/onn')
}

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggleFeaturesFunction(node: Node): boolean {
    return !!node.getChildren().find((child) => {
        return (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        )
    })
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        const isToggleFeaturesNode =
            node.isKind(SyntaxKind.CallExpression) &&
            isToggleFeaturesFunction(node)

        if (!isToggleFeaturesNode) {
            return
        }

        const objectOptions = node.getFirstDescendantByKind(
            SyntaxKind.ObjectLiteralExpression
        )

        if (!objectOptions) {
            return
        }

        const nameProperty = objectOptions
            .getProperty('name')
            ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
            ?.getText()
            .slice(1, -1)

        const onFunction = objectOptions
            .getProperty('on')
            ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)

        const offFunction = objectOptions
            .getProperty('off')
            ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)

        if (
            !nameProperty ||
            !onFunction ||
            !offFunction ||
            nameProperty !== featureNameToRemove
        ) {
            return
        }

        if (featureState === 'on') {
            node.replaceWithText(onFunction.getBody().getText())
        }

        if (featureState === 'off') {
            node.replaceWithText(offFunction.getBody().getText())
        }
    })
})

project.save().then(() => {
    console.log('DONE')
})
