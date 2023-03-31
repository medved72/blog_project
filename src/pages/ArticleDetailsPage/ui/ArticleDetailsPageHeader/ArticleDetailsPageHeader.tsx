import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath, useNavigate } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button'
import { ROUTES } from 'shared/config/routes'
import classes from './ArticleDetailsPageHeader.module.scss'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle'

interface ArticleDetailsPageHeaderProps {
    className?: string
    id: string
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
    (props) => {
        const { className, id } = props

        const navigate = useNavigate()

        const { t } = useTranslation('articleDetails')

        const canEdit = useSelector(getCanEditArticle)

        const handleBackToList = useCallback(() => {
            navigate(generatePath(ROUTES.ARTICLES, {}))
        }, [navigate])

        const handleEditClick = useCallback(() => {
            navigate(generatePath(ROUTES.ARTICLE_EDIT, { articleId: id }))
        }, [id, navigate])

        return (
            <div
                className={classNames(classes.articleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <Button theme="outline" onClick={handleBackToList}>
                    {t('button.text.goToBack')}
                </Button>
                {canEdit && (
                    <Button theme="outline" onClick={handleEditClick}>
                        {t('button.edit.text')}
                    </Button>
                )}
            </div>
        )
    }
)
ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'
