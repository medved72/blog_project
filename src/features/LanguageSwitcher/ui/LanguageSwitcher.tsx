import { type FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'

export interface SwitchLanguageProps {
    className?: string
    short?: boolean
}

export const LanguageSwitcher: FC<SwitchLanguageProps> = memo(
    ({ className, short }) => {
        const { t, i18n } = useTranslation()

        const toggleLanguage = useCallback(async () => {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }, [i18n])

        return (
            <Button
                className={classNames('', {}, [className])}
                theme="clear"
                onClick={toggleLanguage}
            >
                {short ? t('Ру') : t('Русский')}
            </Button>
        )
    }
)

LanguageSwitcher.displayName = 'LanguageSwitcher'
