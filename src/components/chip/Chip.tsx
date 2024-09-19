import React from 'react';
import './Chip.css';
import CloseIcon from '../icons/CloseIcon';

interface ChipProps {
  text: string;
  hasClose?: boolean;
}

const Chip: React.FC<ChipProps> = ({ text, hasClose = false }) => {
  return (
    <div className='chip rounded-50 px-16 py-4 text-capitalize flex gap-8'>
      <span>{text}</span> {hasClose && <CloseIcon size={16} color='#A8B1D3' />}
    </div>
  );
};

export default Chip;
