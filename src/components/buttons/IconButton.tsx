import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children, ...buttonProps }) => {


    return (
        <button className="rounded-6 p-4 icon-button flex justify-center items-center" {...buttonProps}>
            {children}
        </button>
    );
};

export default IconButton;
