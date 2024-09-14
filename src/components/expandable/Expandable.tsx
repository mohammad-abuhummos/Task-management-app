import React, { useState, useEffect } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import "./Expandable.css";

interface ExpandableProps {
    title?: string;
    children: React.ReactNode;
    isExpanded?: boolean;
    onToggle?: (isExpanded: boolean) => void;
}

const Expandable: React.FC<ExpandableProps> = ({ title, children, isExpanded: controlledIsExpanded, onToggle }) => {
    const [isExpanded, setIsExpanded] = useState(controlledIsExpanded || false);

    useEffect(() => {
        if (controlledIsExpanded !== undefined) {
            setIsExpanded(controlledIsExpanded);
        }
    }, [controlledIsExpanded]);

    const toggleExpand = () => {
        const newIsExpanded = !isExpanded;
        setIsExpanded(newIsExpanded);
        if (onToggle) {
            onToggle(newIsExpanded);
        }
    };

    return (
        <div className="expandable">
            {title && (
                <div className="expandable-header" onClick={toggleExpand}>
                    <h2>{title}</h2>
                    <div className={`expandable-icon ${isExpanded ? "expanded" : ""}`}>
                        <ArrowDownIcon size={18} color="#000" />
                    </div>
                </div>
            )}
            <div className={`expandable-content ${isExpanded ? "expanded" : ""}`}>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Expandable;
