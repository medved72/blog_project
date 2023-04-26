import { type FC, memo, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { type ArticleSortFieldValues } from '@/entities/Article'

import { Select } from '@/shared/ui/Select'
import { classNames } from '@/shared/lib/classNames'
import { type SelectOption } from '@/shared/ui/Select/Select'
import { type SortOrderValues } from '@/shared/types'

import classes from './ArticleListSorter.module.scss'

interface ArticleListSorterProps {
    className?: string
    sortBy: ArticleSortFieldValues
    onChangeSortBy: (sortBy: ArticleSortFieldValues) => void

    order: SortOrderValues
    onChangeOrder: (order: SortOrderValues) => void
}

export const ArticleListSorter: FC<ArticleListSorterProps> = memo((props) => {
    const { className, onChangeOrder, order, sortBy, onChangeSortBy } = props
    const { t } = useTranslation('articleList')

    const orderOptions = useMemo((): Array<SelectOption<SortOrderValues>> => {
        return [
            { value: 'asc', content: t('sort.order.label.asc') },
            { value: 'desc', content: t('sort.order.label.desc') },
        ]
    }, [t])

    const sortByOptions = useMemo((): Array<
        SelectOption<ArticleSortFieldValues>
    > => {
        return [
            { value: 'createdAt', content: t('sort.by.label.createdAt') },
            { value: 'title', content: t('sort.by.label.title') },
            { value: 'views', content: t('sort.by.label.views') },
        ]
    }, [t])

    return (
        <div className={classNames(classes.articleListSorter, {}, [className])}>
            <Select
                label={t('select.label.sort')}
                value={sortBy}
                options={sortByOptions}
                onChange={onChangeSortBy}
            />
            <Select
                label={t('select.label.sortOrder')}
                value={order}
                options={orderOptions}
                onChange={onChangeOrder}
            />
        </div>
    )
})
ArticleListSorter.displayName = 'ArticleListSorter'
