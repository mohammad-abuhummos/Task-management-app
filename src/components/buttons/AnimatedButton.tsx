import React from "react";
import "./AnimatedButton.css";
import icon from "../../assets/icons/add.svg";

interface AnimatedButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="animated-button">
      <span className="icon">
        <img src={icon} className="icon" alt="add new task icon" />
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default AnimatedButton;
