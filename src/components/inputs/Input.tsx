import React, { useState } from 'react';
import './Input.css';

interface FloatingLabelProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabel: React.FC<FloatingLabelProps> = ({ id, label, type, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`floating-label ${isFocused || value ? 'focused' : ''}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FloatingLabel;
