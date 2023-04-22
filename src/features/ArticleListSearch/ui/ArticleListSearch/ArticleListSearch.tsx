import { type FC, memo } from 'react'
import { Input } from '@/shared/ui/Input'
import { useTranslation } from 'react-i18next'

interface ArticleListSearchProps {
    className?: string
    value: string
    onChange: (value: string) => void
}

export const ArticleListSearch: FC<ArticleListSearchProps> = memo((props) => {
    const { className, onChange, value } = props
    const { t } = useTranslation('articleList')
    return (
        <Input
            className={className}
            value={value}
            onChange={onChange}
            placeholder={t('input.search.placeholder')}
        />
    )
})
ArticleListSearch.displayName = 'ArticleListSearch'
