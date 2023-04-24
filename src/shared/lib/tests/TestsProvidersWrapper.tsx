import React, { type FC, type PropsWithChildren, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { StoreProvider } from '@/app/providers/testing'
import { i18n } from '@/shared/config/i18n/i18nInit.static'

export interface TestsProvidersWrapperFactoryProps {
    route?: string
    initialState?: DeepPartial<GlbAppState>
    language?: 'ru' | 'en'
    asyncReducers?: Partial<ReducersMapObject<Required<GlbAppState>>>
}

export function TestsProvidersWrapperFactory(
    options: TestsProvidersWrapperFactoryProps = {}
): FC<PropsWithChildren> {
    const {
        route = '/',
        initialState,
        language = 'ru',
        asyncReducers,
    } = options

    return function TestsProvidersWrapper({ children }) {
        useEffect(() => {
            i18n.changeLanguage(language).catch(console.log)
        }, [])

        return (
            <MemoryRouter initialEntries={[route]}>
                <StoreProvider
                    initialState={initialState as GlbAppState}
                    asyncReducers={
                        asyncReducers as ReducersMapObject<GlbAppState>
                    }
                >
                    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
                </StoreProvider>
            </MemoryRouter>
        )
    }
}
