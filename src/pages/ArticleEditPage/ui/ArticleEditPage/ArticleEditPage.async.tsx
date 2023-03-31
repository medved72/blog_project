import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(
    async () =>
        await import('./ArticleEditPage').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./ArticleEditPage')>(
                    (resolve) =>
                        setTimeout(() => {
                            resolve(result)
                        }, 1500)
                )
        )
)
