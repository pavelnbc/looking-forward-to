import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function Checkbox({ isCompleted, action }) {
    return (
        <div className="checkbox" onClick={action}>
            <FontAwesome name={isCompleted ? "check-square-o" : "square-o"}/>
        </div>
    )
}

Checkbox.propTypes = {
    isCompleted: PropTypes.bool,
    action: PropTypes.func
};

export default Checkbox