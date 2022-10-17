import React from 'react';

const FocusButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary font-blod hover:from-primary hover:to-secondary border-none">{children}</button>
        </div>
    );
};

export default FocusButton;