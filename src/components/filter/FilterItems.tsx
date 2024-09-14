import React from 'react';

interface FilterItemsProps {
    option: string;
    name: string;
    checked: boolean;
    onChange: (option: string) => void;
}

const FilterItems: React.FC<FilterItemsProps> = ({ option, name, checked, onChange }) => {
    return (
        <div className="filter-item" onClick={() => onChange(option)}>
            <input
                type="radio"
                id={option}
                name={name}
                value={option}
                checked={checked}
                onChange={() => onChange(option)}
            />
            <label htmlFor={option}>{option}</label>
        </div>
    );
};

export default FilterItems;
