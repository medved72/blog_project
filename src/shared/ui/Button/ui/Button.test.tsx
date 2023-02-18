import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button'

describe('Button', () => {
  it('render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  it('clear button', () => {
    render(<Button theme='clear'>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
