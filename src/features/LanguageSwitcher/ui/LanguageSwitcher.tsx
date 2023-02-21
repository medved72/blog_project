import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames'

import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

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
                {short ? t('language_short') : t('language')}
            </Button>
        )
    }
)

LanguageSwitcher.displayName = 'LanguageSwitcher'
