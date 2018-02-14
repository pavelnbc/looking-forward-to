import React from 'react';
import PropTypes from 'prop-types';

function Summary({ desires }) {
    let completed = desires.filter((desire) => {
        return desire.isCompleted === true
    });

    return (
        <table className="summary">
            <tbody>
                <tr>
                    <th>All together</th>
                    <td>{desires.length}</td>
                </tr>
                <tr>
                    <th>Pending</th>
                    <td>{desires.length - completed.length}</td>
                </tr>
                <tr>
                    <th>Completed</th>
                    <td>{completed.length}</td>
                </tr>
            </tbody>
        </table>
    )
}

Summary.propTypes = {
    desires: PropTypes.array
};

export default Summary