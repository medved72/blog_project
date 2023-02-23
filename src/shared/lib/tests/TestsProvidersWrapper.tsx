import React, { type FC, type PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { initI18nForTests } from 'shared/config/i18n'
import { MemoryRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

initI18nForTests().catch(console.log)

export interface TestsProvidersWrapperFactoryProps {
    route?: string
    initialState?: DeepPartial<RootState>
    language?: 'ru' | 'en'
}

export function TestsProvidersWrapperFactory(
    options: TestsProvidersWrapperFactoryProps = {}
): FC<PropsWithChildren> {
    const { route = '/', initialState, language = 'ru' } = options
    i18n.changeLanguage(language).catch(console.log)

    return function TestsProvidersWrapper({ children }) {
        return (
            <StoreProvider initialState={initialState as RootState}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
                </MemoryRouter>
            </StoreProvider>
        )
    }
}
