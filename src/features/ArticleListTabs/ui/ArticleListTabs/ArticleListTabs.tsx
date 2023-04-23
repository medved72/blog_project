import { type FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { type ArticleType, articleTypes } from '@/entities/Article'
import { Tabs } from '@/shared/ui/Tabs'
import { type TabItemValue } from '@/shared/ui/Tabs/Tabs'

interface ArticleListTabsProps {
    className?: string
    value: ArticleType
    onTabClick: (value: TabItemValue<ArticleType>) => void
}

export const ArticleListTabs: FC<ArticleListTabsProps> = memo((props) => {
    const { className, value, onTabClick } = props
    const { t } = useTranslation('articleList')

    const articleTabs: Array<TabItemValue<ArticleType>> = useMemo(() => {
        return articleTypes.map((value) => ({
            value,
            content: t(`filters.tabs.tab.label.${value}`),
        }))
    }, [t])

    return (
        <Tabs
            className={className}
            value={value}
            tabs={articleTabs}
            onTabClick={onTabClick}
        />
    )
})
ArticleListTabs.displayName = 'ArticleListTabs'
