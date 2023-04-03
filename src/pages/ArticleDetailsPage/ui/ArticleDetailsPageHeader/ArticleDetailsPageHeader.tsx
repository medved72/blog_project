import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath, useNavigate } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button'
import { ROUTES } from 'shared/config/routes'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle'
import { HStack } from 'shared/ui/Stack'

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
            <HStack
                justify="between"
                className={classNames('', {}, [className])}
                fullWidth
            >
                <Button theme="outline" onClick={handleBackToList}>
                    {t('button.text.goToBack')}
                </Button>
                {canEdit && (
                    <Button theme="outline" onClick={handleEditClick}>
                        {t('button.edit.text')}
                    </Button>
                )}
            </HStack>
        )
    }
)
ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'
