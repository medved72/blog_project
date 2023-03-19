import { lazy } from 'react'

export const AddArticleCommentFormAsync = lazy(
    async () =>
        await import('./AddArticleCommentForm').then(
            async (result) =>
                // eslint-disable-next-line @typescript-eslint/consistent-type-imports
                await new Promise<typeof import('./AddArticleCommentForm')>(
                    (resolve) =>
                        setTimeout(() => {
                            resolve(result)
                        }, 1500)
                )
        )
)
