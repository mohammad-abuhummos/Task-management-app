import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { Task } from '../../types/types';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}));
vi.mock('../../redux/tasksSlice', () => ({
  updateTask: vi.fn(),
}));

describe('TaskItem Component', () => {
  const dispatchMock = vi.fn();
  const mockOnUpdate = vi.fn();
  const mockOnDelete = vi.fn();

  beforeEach(() => {
    (useDispatch as unknown as Mock).mockReturnValue(dispatchMock);
    dispatchMock.mockClear();
    mockOnUpdate.mockClear();
    mockOnDelete.mockClear();
  });

  const mockTask: Task = {
    id: 1,
    title: 'Test Task',
    description: 'Test Description',
    status: 'complete',
    categories: ['Category 1', 'Category 2'],
  };

  it('renders task title and categories', () => {
    render(<TaskItem task={mockTask} onUpdate={mockOnUpdate} onDelete={mockOnDelete} />);

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  it('toggles task description when clicking the title', () => {
    render(<TaskItem task={mockTask} onUpdate={mockOnUpdate} onDelete={mockOnDelete} />);

    fireEvent.click(screen.getByText('Test Task'));
    expect(screen.getByText('Test Description')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Test Task'));
  });

  it('calls the onUpdate function when clicking the edit button', () => {
    render(<TaskItem task={mockTask} onUpdate={mockOnUpdate} onDelete={mockOnDelete} />);

    const editButton = screen.getByLabelText('edit task');
    fireEvent.click(editButton);

    expect(mockOnUpdate).toHaveBeenCalledWith(mockTask);
    expect(mockOnUpdate).toHaveBeenCalledTimes(1);
  });

  it('calls the onDelete function when clicking the delete button', () => {
    render(<TaskItem task={mockTask} onUpdate={mockOnUpdate} onDelete={mockOnDelete} />);

    const deleteButton = screen.getByLabelText('delete task');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(mockTask);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

});
