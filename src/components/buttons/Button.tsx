import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary" | "tertiary";
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, children, ...buttonProps }) => {
    const className = `button button-${color ?? "secondary"}`;

    return (
        <button className={className} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;
