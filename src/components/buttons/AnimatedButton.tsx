import React from 'react';
import './AnimatedButton.css';
import reactLogo from '../../assets/icons/Add.svg';

interface AnimatedButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="animated-button">
      <span className="icon">          <img src={reactLogo} className="logo react" alt="React logo" />
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default AnimatedButton;
