import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FilterItems from './FilterItems';

describe('FilterItems Component', () => {
  const mockOnChange = vi.fn();

  const defaultProps = {
    option: 'Option 1',
    name: 'filter',
    checked: false,
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders the correct option with label and unchecked state', () => {
    render(<FilterItems {...defaultProps} />);
    const radioInput = screen.getByRole('radio', { name: 'Option 1' });
    const label = screen.getByLabelText('Option 1');
    expect(radioInput).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(radioInput).not.toBeChecked();
    expect(radioInput).toHaveAttribute('name', 'filter');
    expect(radioInput).toHaveAttribute('value', 'Option 1');
  });

  it('renders as checked when the "checked" prop is true', () => {
    render(<FilterItems {...defaultProps} checked={true} />);
    const radioInput = screen.getByRole('radio', { name: 'Option 1' });
    expect(radioInput).toBeChecked();
  });


  it('calls the onChange function when label is clicked', () => {
    render(<FilterItems {...defaultProps} />);
    const label = screen.getByLabelText('Option 1');
    fireEvent.click(label);
    expect(mockOnChange).toHaveBeenCalledWith('Option 1');
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
