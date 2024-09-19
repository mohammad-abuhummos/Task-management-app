import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Filter from './FilterWrap'

vi.mock('../../hooks/useScreenSize', () => ({
  default: vi.fn()
}))

vi.mock('../expandable/Expandable', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="mock-expandable">
      <div data-testid="mock-expandable-title">{title}</div>
      <div data-testid="mock-expandable-children">{children}</div>
    </div>
  )
}))

import useScreenSize from '../../hooks/useScreenSize'

describe('Filter Component', () => {
  let useScreenSizeMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    useScreenSizeMock = useScreenSize as ReturnType<typeof vi.fn>;
  });

  it('renders children directly when screen size is "md"', () => {
    useScreenSizeMock.mockReturnValue('md')

    render(<Filter>Test Content</Filter>)

    expect(screen.getByText('Filter')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
    expect(screen.queryByTestId('mock-expandable')).not.toBeInTheDocument()
  })

  it('renders children inside Expandable when screen size is not "md"', () => {
    useScreenSizeMock.mockReturnValue('sm')

    render(<Filter>Test Content</Filter>)

    expect(screen.getByTestId('mock-expandable')).toBeInTheDocument()
    expect(screen.getByTestId('mock-expandable-title')).toHaveTextContent('Filter')
    expect(screen.getByTestId('mock-expandable-children')).toHaveTextContent('Test Content')
  })

  it('applies correct CSS classes', () => {
    useScreenSizeMock.mockReturnValue('md')

    render(<Filter>Test Content</Filter>)

    const filterElement = screen.getByText('Filter').closest('div')
    expect(filterElement).toHaveClass('card', 'min-w-260', 'h-full', 'min-h-filter', 'text-capitalize')
  })
})
