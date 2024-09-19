import React, { useEffect, useRef, useState } from 'react';
import './ChipInput.css';
import Chip from '../chip/Chip';

interface ChipInputProps {
    id: string;
    label: string;
    options: string[];
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
}

const ChipInput: React.FC<ChipInputProps> = ({ id, label, options, selectedValues, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Reference for the dropdown container

    // Handle selection of an option
    const handleSelectOption = (option: string) => {
        if (selectedValues.includes(option)) {
            onChange(selectedValues.filter((value) => value !== option));
        } else {
            onChange([...selectedValues, option]);
        }
    };

    const handleRemoveChip = (chip: string, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent dropdown from toggling
        onChange(selectedValues.filter((value) => value !== chip));
    };


    // Handle click outside to close the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`floating-label ${isFocused || selectedValues.length ? 'focused' : ''}`} ref={dropdownRef}>
            <div
                className="input-container"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <div className="chips-container">
                    {selectedValues.map((value) => (
                        <div key={value} onClick={(event) => handleRemoveChip(value, event)}>
                            <Chip hasClose={true} text={value} />
                        </div>
                    ))}
                </div>
                <label htmlFor={id}>{label}</label>
            </div>

            {isDropdownOpen && (
                <div className="dropdown">
                    {options.map((option) => (
                        <div key={option} className="dropdown-item" onClick={() => handleSelectOption(option)}>
                            <input
                                id={option}
                                type="checkbox"
                                checked={selectedValues.includes(option)}
                                onChange={() => handleSelectOption(option)}
                            />
                            <p>{option}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChipInput;
