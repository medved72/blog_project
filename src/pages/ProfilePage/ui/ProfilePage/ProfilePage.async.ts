import { lazy } from 'react'

export const ProfilePageAsync = lazy(
    async () =>
        await import('./ProfilePage').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./ProfilePage')>((resolve) =>
                    setTimeout(() => {
                        resolve(result)
                    }, 1500)
                )
        )
)
