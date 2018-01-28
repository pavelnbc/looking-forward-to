import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

function Comments({ comments }) {
    return (
        <div className="comments">
            {comments.map((comment, index) => {
                return (
                    <div className="comment" key={index}>
                        <div>
                            <FontAwesome name="comment"/>
                        </div>
                        <span>{comment}</span>
                    </div>
                )
            })}
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.array
}

export default Comments