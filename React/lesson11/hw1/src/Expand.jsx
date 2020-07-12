import React from 'react';

const Expand = ({ isOpen, children, title, onSwitch }) => {
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={onSwitch}>
                    {isOpen ? '↑' : '↓'}
                </button>
            </div>
            {isOpen
                ? <div className="expand__content">
                    <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
                </div>
                : null
            }
        </div>
    )
}

export default Expand;