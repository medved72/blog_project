export type AddArticleCommentFormError = 'unknown_error'

export interface AddArticleCommentFormState {
    text: string
    error?: AddArticleCommentFormError
    loading?: boolean
}
