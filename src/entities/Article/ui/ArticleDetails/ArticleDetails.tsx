import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleDetails.module.scss'
import { withDynamicModuleLoader } from 'shared/lib/components'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { reducer as articleDetailsReducer } from '../../model/slices/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton'
import { Avatar } from 'shared/ui/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon'
import { ArticleBlock } from '../ArticleBlock'
import { HStack, VStack } from 'shared/ui/Stack'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const ArticleDetailsPlain: FC<ArticleDetailsProps> = memo((props) => {
    const { className, id } = props
    const { t } = useTranslation('articleDetails')
    const dispatch = useAppDispatch()
    const loading = useSelector(getArticleDetailsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)

    useEffect(() => {
        dispatch(fetchArticleById(id)).catch(console.error)
    }, [dispatch, id])

    if (loading) {
        return (
            <VStack
                className={classNames(classes.articleDetails, {}, [className])}
                gap="32"
                fullWidth
            >
                <Skeleton
                    className={classes.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </VStack>
        )
    }

    if (error) {
        return (
            <div
                className={classNames(classes.articleDetails, {}, [className])}
            >
                <Text
                    text={t(`articleDetails.errors.${error}`)}
                    align="center"
                />
            </div>
        )
    }

    if (!article) {
        return (
            <div
                className={classNames(classes.articleDetails, {}, [className])}
            >
                <Text
                    text={t(`articleDetails.errors.notFound`)}
                    align="center"
                />
            </div>
        )
    }

    return (
        <VStack
            fullWidth
            gap="16"
            className={classNames(classes.articleDetails, {}, [className])}
        >
            <HStack justify="center" fullWidth>
                <Avatar
                    className={classes.avatar}
                    size={200}
                    src={article.img}
                />
            </HStack>
            <VStack gap="4">
                <Text title={article.title} text={article.subtitle} size="L" />
                <HStack gap="16">
                    <Icon Svg={EyeIcon} />
                    <Text text={article.views} />
                </HStack>
                <HStack gap="16">
                    <Icon Svg={CalendarIcon} />
                    <Text text={article.createdAt} />
                </HStack>
            </VStack>
            {article.blocks.map((block) => {
                return <ArticleBlock key={block.id} block={block} />
            })}
        </VStack>
    )
})
ArticleDetailsPlain.displayName = 'ArticleDetails'

export const ArticleDetails = withDynamicModuleLoader(ArticleDetailsPlain, {
    removeAfterUnmount: true,
    reducers: {
        articleDetails: articleDetailsReducer,
    },
})
