import React from 'react';
import FontAwesome from 'react-fontawesome';

function Checkbox({ isCompleted, action }) {
    return (
        <div className="checkbox" onClick={action}>
            <FontAwesome name={isCompleted ? "check-square-o" : "square-o"}/>
        </div>
    )
}

export default Checkbox