import React, { useState, useMemo } from 'react';
import './Dropdown.css';
import { StatusOptionType } from '../../types/types';
import ArrowDownIcon from '../icons/ArrowDownIcon';

interface StatusDropdownProp {
    onChange: (status: StatusOptionType) => void;
    value?: StatusOptionType;
}

const StatusDropdown: React.FC<StatusDropdownProp> = ({ value = 'complete', onChange }) => {
    const [selectedStatus, setSelectedStatus] = useState<StatusOptionType>(value);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(prevState => !prevState);

    const handleStatusChange = (status: StatusOptionType) => {
        setSelectedStatus(status);
        setIsOpen(false);
        onChange(status);
    };

    const statusLabel = useMemo(() => {
        return selectedStatus === 'complete' ? 'Completed' : 'Incomplete';
    }, [selectedStatus]);

    const iconColor = useMemo(() => {
        return selectedStatus === 'complete' ? '#2a8a2a' : '#ff6b00';
    }, [selectedStatus]);

    return (
        <div className="dropdown-container">
            <button
                className={`button dropdown-header ${selectedStatus.toLowerCase()}`}
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span className="status-label">{statusLabel}</span>
                <ArrowDownIcon size={18} color={iconColor} />
            </button>
            {isOpen && (
                <ul className="dropdown-list card p-4" role="listbox">
                    <li
                        className="dropdown-item"
                        onClick={() => handleStatusChange('complete')}
                        role="option"
                        aria-selected={selectedStatus === 'complete'}
                    >
                        <span className="status-indicator completed"></span> Completed
                    </li>
                    <li
                        className="dropdown-item"
                        onClick={() => handleStatusChange('incomplete')}
                        role="option"
                        aria-selected={selectedStatus === 'incomplete'}
                    >
                        <span className="status-indicator incomplete"></span> Incomplete
                    </li>
                </ul>
            )}
        </div>
    );
};

export default StatusDropdown;
