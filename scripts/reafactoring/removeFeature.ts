import { type JsxAttribute, type Node, Project, SyntaxKind } from 'ts-morph'

const featureNameToRemove = process.argv[2] // example isArticleEnabled

const featureState = process.argv[3] // example off/on

if (!featureNameToRemove) {
    throw new Error('Укажите название фича-флага')
}

if (!featureState || !['on', 'off'].includes(featureState)) {
    throw new Error('Укажите состояние фичи off/onn')
}

const toggleFunctionName = 'toggleFeatures'
const toggleComponentName = 'ToggleFeature'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggleFeaturesFunction(node: Node): boolean {
    if (!node.isKind(SyntaxKind.CallExpression)) {
        return false
    }

    return !!node.getChildren().find((child) => {
        return (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        )
    })
}

function isToggleFeaturesComponent(node: Node): boolean {
    if (!node.isKind(SyntaxKind.JsxSelfClosingElement)) {
        return false
    }

    return !!node.getChildren().find((child) => {
        return (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleComponentName
        )
    })
}

function replaceToggleFunction(node: Node): void {
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
}

function getAttributeNodeByName(attributes: JsxAttribute[], name: string) {
    return attributes.find((node) => node.getName() === name)
}

function getReplacedComponent(attribute: JsxAttribute): string {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText()
        .trim()

    if (!value) return ''

    if (value === '<></>') {
        return ''
    }

    if (value.startsWith('(')) {
        return value.slice(1, -1)
    }

    return value
}

function replaceToggleComponent(node: Node): void {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

    const name = getAttributeNodeByName(attributes, 'name')
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1)

    if (!name || name !== featureNameToRemove) {
        return
    }

    const onAttribute = getAttributeNodeByName(attributes, 'on')

    const offAttribute = getAttributeNodeByName(attributes, 'off')

    if (!onAttribute || !offAttribute) {
        return
    }

    if (featureState === 'on') {
        node.replaceWithText(getReplacedComponent(onAttribute))
    }

    if (featureState === 'off') {
        node.replaceWithText(getReplacedComponent(offAttribute))
    }
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (isToggleFeaturesFunction(node)) {
            replaceToggleFunction(node)
        }

        if (isToggleFeaturesComponent(node)) {
            replaceToggleComponent(node)
        }
    })
})

project.save().then(() => {
    console.log('DONE')
})
