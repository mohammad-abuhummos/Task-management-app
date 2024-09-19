import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Expandable from './Expandable'

vi.mock('../icons/ArrowDownIcon', () => ({
  default: () => <div data-testid="mock-arrow-icon" />
}))

describe('Expandable Component', () => {
  it('renders the title when provided', () => {
    render(<Expandable title="Test Title">Content</Expandable>)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('does not render the header when no title is provided', () => {
    render(<Expandable>Content</Expandable>)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it('renders children content', () => {
    render(<Expandable>Test Content</Expandable>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('toggles expansion when header is clicked', () => {
    render(<Expandable title="Clickable Title">Content</Expandable>)
    const header = screen.getByText('Clickable Title')
    const content = screen.getByText('Content').parentElement

    expect(content).not.toHaveClass('expanded')
    fireEvent.click(header)
    expect(content).toHaveClass('expanded')
    fireEvent.click(header)
    expect(content).not.toHaveClass('expanded')
  })

  it('calls onToggle when expansion state changes', () => {
    const onToggleMock = vi.fn()
    render(<Expandable title="Toggle Test" onToggle={onToggleMock}>Content</Expandable>)
    const header = screen.getByText('Toggle Test')

    fireEvent.click(header)
    expect(onToggleMock).toHaveBeenCalledWith(true)
    fireEvent.click(header)
    expect(onToggleMock).toHaveBeenCalledWith(false)
  })

  it('respects controlled isExpanded prop', () => {
    const { rerender } = render(<Expandable title="Controlled Test" isExpanded={false}>Content</Expandable>)
    const content = screen.getByText('Content').parentElement
    expect(content).not.toHaveClass('expanded')

    rerender(<Expandable title="Controlled Test" isExpanded={true}>Content</Expandable>)
    expect(content).toHaveClass('expanded')
  })

  it('renders ArrowDownIcon and rotates it when expanded', () => {
    render(<Expandable title="Icon Test">Content</Expandable>)
    const icon = screen.getByTestId('mock-arrow-icon').parentElement
    expect(icon).not.toHaveClass('expanded')

    fireEvent.click(screen.getByText('Icon Test'))
    expect(icon).toHaveClass('expanded')
  })
})