import { type FC, memo } from 'react'

import { useTranslation } from 'react-i18next'

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Avatar } from '@/shared/ui/Avatar'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames'

import { ArticleBlock } from '../ArticleBlock'
import { useArticleByIdQuery } from '../../api/articleDetails.api'

import classes from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const { className, id } = props
    const { t } = useTranslation('articleDetails')
    const { data: article, error, isLoading } = useArticleByIdQuery(id)

    if (isLoading) {
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
                    text={t(`articleDetails.errors.UNKNOWN_ERROR}`)}
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
ArticleDetails.displayName = 'ArticleDetails'
