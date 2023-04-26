import { Suspense, useEffect } from 'react'

import { I18nextProvider } from 'react-i18next'
import { type DecoratorFn } from '@storybook/react'

import { i18n } from '../i18n/i18nInit.static'

export const I18nDecorator: DecoratorFn = (Story, context) => {
    const { locale } = context.globals

    useEffect(() => {
        i18n.changeLanguage(locale).catch(console.error)
    }, [locale])

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    )
}
