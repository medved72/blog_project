import { type FC, memo } from 'react'

import { ArticlesListFilters } from '@/widgets/ArticlesListFilters'

import { ArticlePageGreeting } from '@/features/ArticlePageGreeting'
import { ArticlesListView } from '@/features/ArticlesListView'

import { VStack } from '@/shared/ui/Stack'

const ArticlesPage: FC = memo(() => {
    return (
        <>
            <VStack gap="16">
                <ArticlesListFilters />
                <ArticlesListView />
            </VStack>
            <ArticlePageGreeting />
        </>
    )
})
ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
