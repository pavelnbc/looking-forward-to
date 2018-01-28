import React from 'react';
import FontAwesome from 'react-fontawesome';

function Button({ icon, action, ...props }) {
    return (
        <div className="button" onClick={action} {...props}>
            <FontAwesome name={icon} />
        </div>
    )
}

export default Button