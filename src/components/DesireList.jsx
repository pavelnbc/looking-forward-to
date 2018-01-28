import React  from 'react';
import { ListGroup } from 'react-bootstrap';

import Desire from '../components/Desire';

function DesireList({ desires, handleDelete, handleCheck, handleEdit, openForm, openDescription, addDesireComment }) {
    return (
        <ListGroup>
            {desires.map((desire, index) => {
                return (
                    <Desire key={index}
                            data={desire}
                            onDelete={handleDelete}
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

export default DesireList