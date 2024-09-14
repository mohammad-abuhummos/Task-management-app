import React from 'react';
import './Chip.css';

interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className='chip rounded-50 px-16 py-4 text-capitalize '>
      <span>{text}</span>
    </div>
  );
};

export default Chip;
