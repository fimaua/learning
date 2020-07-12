import React from 'react';

const Expand = ({ isOpen, children, title, onSwitch }) => {
    const swithChildren = () => {
        if (isOpen) {
            return <div className="expand__content">
                {children}
            </div>
        }
        return null
    }
    return (
        <div className="expand border">
            <div className="expand__header">
                <span className="expand__title">{title}</span>
                <button className="expand__toggle-btn" onClick={onSwitch}>
                    {isOpen ? '↑' : '↓'}
                </button>
            </div>
            {swithChildren()}
        </div>
    )
}

export default Expand;