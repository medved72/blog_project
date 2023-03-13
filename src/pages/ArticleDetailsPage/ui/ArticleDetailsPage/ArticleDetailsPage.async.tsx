import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(
    async () =>
        await import('./ArticleDetailsPage').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./ArticleDetailsPage')>((resolve) =>
                    setTimeout(() => {
                        resolve(result)
                    }, 1500)
                )
        )
)
