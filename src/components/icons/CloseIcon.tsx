import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
}

const CloseIcon: React.FC<IconProps> = ({ size = 24, color = 'white' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill="none"
        className='m-auto'
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4.375 4.375L9.625 9.625M4.375 9.625L9.625 4.375"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>

);

export default CloseIcon;
