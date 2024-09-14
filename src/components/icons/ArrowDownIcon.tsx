import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
}

const ArrowDownIcon: React.FC<IconProps> = ({ size = 16, color = '#FF6B00' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4.6665 7.16667L7.99984 10.5L11.3332 7.16667"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowDownIcon;
