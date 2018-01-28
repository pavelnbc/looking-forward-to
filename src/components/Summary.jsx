import React from 'react';

function Summary({ desires }) {
    let completed = desires.filter((desire) => {
        return desire.isCompleted === true
    });

    return (
        <tbody className="summary">
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
    )
}

export default Summary