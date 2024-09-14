import React, { useState } from 'react';
import './Textarea.css';

interface TextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ id, label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`floating-label ${isFocused || value ? 'focused' : ''}`}>
      <textarea
        id={id}
        value={value}
        rows={5}
        style={{ resize: 'none' }}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Textarea;
