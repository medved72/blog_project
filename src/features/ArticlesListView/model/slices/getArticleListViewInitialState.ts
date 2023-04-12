import { type ArticlesListViewState } from '../types/ArticlesListViewState'

export const getArticleListViewInitialState = (): ArticlesListViewState => ({
    ids: [],
    entities: {},
    view: 'tile',
    page: 0,
    limit: 10,
    hasMore: true,
    _initialized: false,
    sort: 'createdAt',
    search: '',
    order: 'asc',
    type: 'All',
})
