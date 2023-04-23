import { type FC, memo } from 'react'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
    const { className } = props
    return (
        <div className={className}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            ArticleEditPage
        </div>
    )
})
ArticleEditPage.displayName = 'ArticleEditPage'

export default ArticleEditPage
