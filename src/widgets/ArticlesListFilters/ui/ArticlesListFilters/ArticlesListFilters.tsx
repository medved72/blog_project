import { type FC, memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames'
import classes from './ArticlesListFilters.module.scss'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    articlesListViewActions,
    fetchArticlesList,
    getArticleListViewMode,
    getArticleListViewOrder,
    getArticleListViewSearch,
    getArticleListViewSort,
    getArticleListViewType,
} from '@/features/ArticlesListView'
import {
    type ArticleListViewMode,
    type ArticleSortFieldValues,
    type ArticleType,
} from '@/entities/Article'
import { ArticleListSorter } from '@/features/ArticleListSorter'
import { Card } from '@/shared/ui/Card'
import { ArticleListSearch } from '@/features/ArticleListSearch'
import { type SortOrderValues } from '@/shared/types'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { ArticleListTabs } from '@/features/ArticleListTabs'
import { type TabItemValue } from '@/shared/ui/Tabs'

interface ArticlesListFiltersProps {
    className?: string
}

export const ArticlesListFilters: FC<ArticlesListFiltersProps> = memo(
    (props) => {
        const { className } = props
        const dispatch = useAppDispatch()
        const viewMode = useSelector(getArticleListViewMode)
        const sortBy = useSelector(getArticleListViewSort)
        const sortOrder = useSelector(getArticleListViewOrder)
        const search = useSelector(getArticleListViewSearch)
        const type = useSelector(getArticleListViewType)

        const fetchData = useCallback(async () => {
            await dispatch(fetchArticlesList({ replace: true }))
        }, [dispatch])

        const debouncedFetchData = useDebounce(fetchData, 500)

        const handleChangeSortBy = useCallback(
            async (value: ArticleSortFieldValues) => {
                dispatch(articlesListViewActions.setSort(value))
                dispatch(articlesListViewActions.setPage(1))
                await fetchData()
            },
            [dispatch, fetchData]
        )

        const handleChangeOrder = useCallback(
            async (value: SortOrderValues) => {
                dispatch(articlesListViewActions.setOrder(value))
                dispatch(articlesListViewActions.setPage(1))
                await fetchData()
            },
            [dispatch, fetchData]
        )

        const handleChangeSearch = useCallback(
            async (value: string) => {
                dispatch(articlesListViewActions.setSearch(value))
                dispatch(articlesListViewActions.setPage(1))
                debouncedFetchData()
            },
            [dispatch, debouncedFetchData]
        )

        const handleChangeType = useCallback(
            async (tab: TabItemValue<ArticleType>) => {
                dispatch(articlesListViewActions.setType(tab.value))
                dispatch(articlesListViewActions.setPage(1))
                await fetchData()
            },
            [dispatch, fetchData]
        )

        const handleViewChange = useCallback(
            (view: ArticleListViewMode) => {
                dispatch(articlesListViewActions.setView(view))
            },
            [dispatch]
        )

        return (
            <div
                className={classNames(classes.articlesListFilters, {}, [
                    className,
                ])}
            >
                <div className={classes.sortWrapper}>
                    <ArticleListSorter
                        sortBy={sortBy}
                        order={sortOrder}
                        onChangeSortBy={handleChangeSortBy}
                        onChangeOrder={handleChangeOrder}
                    />
                    <ArticleViewSelector
                        view={viewMode}
                        onChange={handleViewChange}
                    />
                </div>
                <Card className={classes.search}>
                    <ArticleListSearch
                        value={search}
                        onChange={handleChangeSearch}
                    />
                </Card>
                <ArticleListTabs
                    className={classes.tabs}
                    value={type}
                    onTabClick={handleChangeType}
                />
            </div>
        )
    }
)
ArticlesListFilters.displayName = 'ArticlesListFilters'
