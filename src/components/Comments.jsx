import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Button from './Button';

function Comments({ id, comments, deleteComment }) {
    return (
        <div className="comments">
            {comments.map((comment, index) => {
                return (
                    <section className="comment" key={index}>
                        <div>
                            <FontAwesome name="comment"/>
                        </div>
                        <span>{comment ? comment.title : null}</span>
                        <Button icon="times" action={() => deleteComment(id, comment.id)}/>
                    </section>
                )
            })}
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.array
};

export default Comments