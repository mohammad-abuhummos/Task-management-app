import React, { useState } from 'react';
import './Dropdown.css';
import { StatusOptionType } from '../../types/types';
import ArrowDownIcon from '../icons/ArrowDownIcon';

interface StatusDropdownProp {
    onChange: (status: StatusOptionType) => void;
    value?: StatusOptionType;
}

const StatusDropdown: React.FC<StatusDropdownProp> = ({ value, onChange }) => {
    const [selectedStatus, setSelectedStatus] = useState<StatusOptionType>(value ?? 'complete');
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleStatusChange = (status: StatusOptionType) => {
        setSelectedStatus(status);
        setIsOpen(false);
        onChange(status);
    };
    const getSelectedStatusLabel = (selectedStatus: StatusOptionType): string => {
        return selectedStatus === 'complete' ? 'Completed' : 'Incomplete';
    }
    const getIconColor = (selectedStatus: StatusOptionType): string => {
        return selectedStatus === 'complete' ? '#2a8a2a' : '#ff6b00';
    }

    return (
        <div className="dropdown-container">
            <div className={`dropdown-header ${selectedStatus.toLowerCase()}`} onClick={toggleDropdown}>
                <span className={`status-label ${selectedStatus.toLowerCase()}`}>{getSelectedStatusLabel(selectedStatus)}</span>
                <span className={`dropdown-arrow  ${selectedStatus.toLowerCase()}`} ><ArrowDownIcon size={18} color={getIconColor(selectedStatus)} /> </span>
            </div>
            {
                isOpen && (
                    <ul className="dropdown-list card p-4">
                        <li
                            className="dropdown-item"
                            onClick={() => handleStatusChange('complete')}
                        >
                            <span className="status-indicator completed"></span> Completed
                        </li>
                        <li
                            className="dropdown-item"
                            onClick={() => handleStatusChange('incomplete')}
                        >
                            <span className="status-indicator incomplete"></span> Incomplete
                        </li>
                    </ul>
                )
            }
        </div >
    );
};

export default StatusDropdown;
