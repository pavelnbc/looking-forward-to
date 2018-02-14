import React from 'react';
import FontAwesome from 'react-fontawesome';

function Comment({ comment, deleteComment }) {
    return(
        <section className="comment">
            <div>
                <FontAwesome name="comment"/>
            </div>
            <span>{comment}</span>
            <div>
                <FontAwesome name="times" action={() => deleteComment()}/>
            </div>
        </section>
    )
}

export default Comment