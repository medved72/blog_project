import { renderWithProviders } from '@/shared/lib/tests'

import { ArticleText } from './ArticleText'

describe('ArticleText', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleText
                block={{
                    type: 'TEXT',
                    id: '1',
                    title: 'title',
                    paragraphs: [],
                }}
            />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
