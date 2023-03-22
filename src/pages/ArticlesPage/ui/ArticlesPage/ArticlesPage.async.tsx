import { lazy } from 'react'

export const ArticlesPageAsync = lazy(
    async () =>
        await import('./ArticlesPage').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./ArticlesPage')>((resolve) =>
                    setTimeout(() => {
                        resolve(result)
                    }, 1500)
                )
        )
)
