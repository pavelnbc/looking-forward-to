import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function Button({ icon, action, ...props }) {
    return (
        <div className="button" onClick={action} {...props}>
            <FontAwesome name={icon} />
        </div>
    )
}

Button.propTypes = {
    icon: PropTypes.string,
    action: PropTypes.func,
    props: PropTypes.any
};

export default Button