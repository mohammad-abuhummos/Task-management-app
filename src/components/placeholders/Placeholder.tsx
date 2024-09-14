import React from 'react';
import './Placeholder.css';
import img from '../../assets/icons/result.svg';

const Placeholder: React.FC = () => {
    return (
        <div className="placeholder-container">
            <img src={img} width={'200px'} height={'200px'} alt="No results" />
            <h2>No result found!</h2>
            <p>Please add tasks for an amazing experience.!</p>
        </div>
    );
};

export default Placeholder;