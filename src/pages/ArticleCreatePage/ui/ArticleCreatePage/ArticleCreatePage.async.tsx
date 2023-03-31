import { lazy } from 'react'

export const ArticleCreatePageAsync = lazy(
    async () =>
        await import('./ArticleCreatePage').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./ArticleCreatePage')>(
                    (resolve) =>
                        setTimeout(() => {
                            resolve(result)
                        }, 1500)
                )
        )
)
