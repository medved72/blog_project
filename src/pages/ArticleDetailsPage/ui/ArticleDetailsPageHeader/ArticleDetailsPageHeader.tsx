import { type FC, memo, useCallback, useMemo } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
    getArticleEditRoute,
    getArticleListRoute,
} from '@/shared/config/routes'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { classNames } from '@/shared/lib/classNames'

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

        const canEditArticleSelector = useMemo(() => {
            return getCanEditArticle(id)
        }, [id])

        const canEdit = useSelector(canEditArticleSelector)

        const handleBackToList = useCallback(() => {
            navigate(getArticleListRoute())
        }, [navigate])

        const handleEditClick = useCallback(() => {
            navigate(getArticleEditRoute(id))
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
