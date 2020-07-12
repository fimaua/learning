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
                    {children}
                </div>
                : null}
        </div>
    )
}

export default Expand;