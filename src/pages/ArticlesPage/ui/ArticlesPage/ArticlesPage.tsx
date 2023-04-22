import { type FC, memo } from 'react'
import { ArticlesListView } from '@/features/ArticlesListView'
import { ArticlesListFilters } from '@/widgets/ArticlesListFilters'
import { VStack } from '@/shared/ui/Stack'

const ArticlesPage: FC = memo(() => {
    return (
        <VStack gap="16">
            <ArticlesListFilters />
            <ArticlesListView />
        </VStack>
    )
})
ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
