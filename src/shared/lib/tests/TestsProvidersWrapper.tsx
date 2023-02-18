import React, { type FC, type PropsWithChildren } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { initI18nForTests } from 'shared/config/i18n'
import { MemoryRouter } from 'react-router-dom'

initI18nForTests().catch(console.log)

export interface TestsProvidersWrapperFactoryProps {
  route?: string
}

export function TestsProvidersWrapperFactory (options: TestsProvidersWrapperFactoryProps = {}): FC<PropsWithChildren> {
  const { route = '/' } = options
  const TestsProvidersWrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </MemoryRouter>
    )
  }
  return TestsProvidersWrapper
}
