import React, { useState } from 'react';
import FilterItems from './FilterItems';
import './FilterGroup.css';
interface FilterGroupProps {
    title: string;
    options: string[];
    name: string;
    value?: string | null;
    onOptionChange: (option: string) => void;
    className?: string;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, value, options, name, onOptionChange, className }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(value ?? null);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        onOptionChange(option);
    };

    return (
        <div className={`filter-group ${className}`}>
            <p>{title}</p>
            <div className="filter-items">
                {options.map((option) => (
                    <FilterItems
                        key={option}
                        option={option}
                        name={name}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default FilterGroup;
