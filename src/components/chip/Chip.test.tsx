import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Chip from './Chip'

describe('Chip Component', () => {
    it('renders the text prop correctly', () => {
        render(<Chip text="Test Chip" />)
        expect(screen.getByText('Test Chip')).toBeInTheDocument()
    })

    it('applies the correct CSS classes', () => {
        render(<Chip text="Styled Chip" />)
        const chipElement = screen.getByText('Styled Chip').closest('div')
        expect(chipElement).toHaveClass('chip', 'rounded-50', 'px-16', 'py-4', 'text-capitalize')
    })


    it('renders as a div element', () => {
        render(<Chip text="Div Test" />)
        const chipElement = screen.getByText('Div Test').closest('div')
        expect(chipElement?.tagName).toBe('DIV')
    })

    it('wraps the text in a span element', () => {
        render(<Chip text="Span Test" />)
        const spanElement = screen.getByText('Span Test')
        expect(spanElement.tagName).toBe('SPAN')
    })
})