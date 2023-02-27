import { lazy } from 'react'

export const LoginFormAsync = lazy(
    async () =>
        await import('./LoginForm').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./LoginForm')>((resolve) =>
                    setTimeout(() => {
                        resolve(result)
                    }, 1500)
                )
        )
)
