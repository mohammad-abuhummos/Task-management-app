import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './Button'

describe('Button Component', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('applies the correct class based on color prop', () => {
        const { rerender } = render(<Button color="primary">Primary</Button>)
        expect(screen.getByText('Primary')).toHaveClass('button button-primary')

        rerender(<Button color="secondary">Secondary</Button>)
        expect(screen.getByText('Secondary')).toHaveClass('button button-secondary')

        rerender(<Button color="tertiary">Tertiary</Button>)
        expect(screen.getByText('Tertiary')).toHaveClass('button button-tertiary')
    })

    it('uses secondary as default color if not specified', () => {
        render(<Button>Default</Button>)
        expect(screen.getByText('Default')).toHaveClass('button button-secondary')
    })

    it('passes additional props to the button element', () => {
        render(<Button data-testid="custom-button" disabled>Disabled</Button>)
        const button = screen.getByTestId('custom-button')
        expect(button).toBeDisabled()
    })
})