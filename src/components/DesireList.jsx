import React  from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import Desire from '../components/Desire';

function DesireList({ desires, handleDelete, handleCommentDelete, handleCheck, handleEdit, openForm, openDescription, addDesireComment }) {
    return (
        <ListGroup>
            {desires.map((desire, index) => {
                return (
                    <Desire key={index}
                            data={desire}
                            onDelete={handleDelete}
                            onCommentDelete={handleCommentDelete}
                            onCheck={handleCheck}
                            onEdit={handleEdit}
                            openEditForm={openForm}
                            openDescriptionField={openDescription}
                            addComment={addDesireComment}
                    />
                )
            })}
        </ListGroup>
    )
}

DesireList.propTypes = {
    desires: PropTypes.array,
    handleDelete: PropTypes.func,
    handleCheck: PropTypes.func,
    handleEdit: PropTypes.func,
    openForm: PropTypes.func,
    openDescription: PropTypes.func,
    addDesireComment: PropTypes.func
};

export default DesireList