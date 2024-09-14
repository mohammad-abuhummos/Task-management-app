import React, { useState, useEffect } from "react";
import "./Modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [isDisplayed, setIsDisplayed] = useState(isOpen);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setTimeout(() => setIsDisplayed(true), 10);
        } else {
            setIsDisplayed(false);
            setTimeout(() => setShouldRender(false), 300);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <div className={`modal-overlay ${isDisplayed ? "enter" : "exit"}`} onClick={onClose}>
            <div
                className="modal-content "
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
