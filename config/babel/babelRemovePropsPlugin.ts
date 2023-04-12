import { type PluginItem } from '@babel/core'

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const props: string[] = state.opts.props || []

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name

                        if (props.includes(nodeName)) {
                            current.parentPath.remove()
                        }
                    },
                })
            },
        },
    }
}
