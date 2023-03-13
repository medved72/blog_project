import { lazy } from 'react'

export const ArticlePageAsync = lazy(
    async () =>
        await import('./ArticlePage').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./ArticlePage')>((resolve) =>
                    setTimeout(() => {
                        resolve(result)
                    }, 1500)
                )
        )
)
