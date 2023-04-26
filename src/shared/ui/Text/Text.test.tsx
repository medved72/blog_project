import { screen } from '@testing-library/react'

import { renderWithProviders } from '@/shared/lib/tests'

import { Text } from './Text'

describe('Text', () => {
    it('should render', () => {
        renderWithProviders(<Text />)
        expect(screen.getByTestId(testId.root)).toBeInTheDocument()
    })

    it('should render only title', () => {
        renderWithProviders(<Text title="test title" />)
        expect(screen.getByTestId(testId.title)).toHaveTextContent('test title')
        expect(screen.queryByTestId(testId.text)).not.toBeInTheDocument()
    })

    it('should render only text', () => {
        renderWithProviders(<Text text="test text" />)
        expect(screen.getByTestId(testId.text)).toHaveTextContent('test text')
        expect(screen.queryByTestId(testId.title)).not.toBeInTheDocument()
    })
})

const testId = {
    root: 'text',
    text: 'text.text',
    title: 'text.title',
}
