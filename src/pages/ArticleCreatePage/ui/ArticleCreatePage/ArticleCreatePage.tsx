import { type FC, memo } from 'react'

interface ArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = memo((props) => {
    const { className } = props
    return (
        <div className={className}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            ArticleCreatePage
        </div>
    )
})
ArticleCreatePage.displayName = 'ArticleCreatePage'

export default ArticleCreatePage
