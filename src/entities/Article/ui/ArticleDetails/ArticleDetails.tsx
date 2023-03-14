import { type FC, memo, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './ArticleDetails.module.scss'
import { withDynamicModuleLoader } from 'shared/lib/components'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { reducer as articleDetailsReducer } from '../../model/slices/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton'

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

    useEffect(() => {
        dispatch(fetchArticleById(id)).catch(console.error)
    }, [dispatch, id])

    if (loading) {
        return (
            <div
                className={classNames(classes.articleDetails, {}, [className])}
            >
                <Skeleton
                    className={classes.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton
                    className={classes.skeleton}
                    width={600}
                    height={24}
                />
                <Skeleton
                    className={classes.skeleton}
                    width="100%"
                    height={200}
                />
                <Skeleton
                    className={classes.skeleton}
                    width="100%"
                    height={200}
                />
            </div>
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

    return (
        <div
            className={classNames(classes.articleDetails, {}, [className])}
        ></div>
    )
})
ArticleDetailsPlain.displayName = 'ArticleDetails'

export const ArticleDetails = withDynamicModuleLoader(ArticleDetailsPlain, {
    removeAfterUnmount: true,
    reducers: {
        articleDetails: articleDetailsReducer,
    },
})
