// import desires from '../data/desires.json';
import axios from 'axios';

export const DOWNLOAD_DESIRES = 'DOWNLOAD_DESIRES';
export const ADD_DESIRE = 'ADD_DESIRE';
export const DELETE_DESIRE = 'DELETE_DESIRE';
export const COMPLETE_DESIRE = 'COMPLETE_DESIRE';
export const EDIT_DESIRE = 'EDIT_DESIRE';
export const OPEN_EDIT_FORM = 'OPEN_EDIT_FORM';
export const OPEN_DESCRIPTION_FIELD = 'OPEN_DESCRIPTION_FIELD';
export const ADD_COMMENT = 'ADD_COMMENT';

export function downloadDesires() {
    return axios.get('https://looking-server.herokuapp.com/api/v1/desires')
        .then(response => response.data)
        .then(desires => ({
            type: DOWNLOAD_DESIRES,
            desires
        }))
        .catch((err) => console.log(err))
}

export function completeDesire(id) {
    let param1 = "isCompleted";
    let param2 = "isDescriptionOpen";

    return axios.put(`https://looking-server.herokuapp.com/api/v1/complete-desire/${id}`, { param1, param2 })
        .then(response => response.data)
        .then(id => ({
            type: COMPLETE_DESIRE,
            id
        }))
        .catch((err) => console.log(err))
}

export function editDesire(id, title) {
    let param1 = "isEditing";

    return axios.put(`https://looking-server.herokuapp.com/api/v1/edit-desire/${id}`, { param1, title})
        .then(response => response.data)
        .then((data) => ({
            type: EDIT_DESIRE,
            id: data.id,
            title: data.title
        }))
        .catch((err) => console.log(err))
}

export function openEditForm(id) {
    let param1 = "isEditing";
    let param2 = "isDescriptionOpen";

    return axios.put(`https://looking-server.herokuapp.com/api/v1/open-edit-form/${id}`, { param1, param2 })
        .then(response => response.data)
        .then(id => ({
            type: OPEN_EDIT_FORM,
            id
        }))
        .catch((err) => console.log(err))
}

export function openDescriptionField(id) {
    let param1 = "isDescriptionOpen";
    let param2 = "isEditing";

    return axios.put(`https://looking-server.herokuapp.com/api/v1/open-description-field/${id}`, { param1, param2 })
        .then(response => response.data)
        .then(id => ({
            type: OPEN_DESCRIPTION_FIELD,
            id
        }))
        .catch((err) => console.log(err))
}

export function addDesire(title, description) {
    return axios.post('https://looking-server.herokuapp.com/api/v1/desires', { title, description })
        .then(response => response.data)
        .then(desire => ({
            type: ADD_DESIRE,
            desire
        }))
        .catch((err) => console.log(err))
}

export function addComment(id, comment) {
    return axios.post(`https://looking-server.herokuapp.com/api/v1/add-comment/${id}`, { comment })
        .then(response => response.data)
        .then((data) => ({
            type: ADD_COMMENT,
            id: data.id,
            comment: data.comment
        }))
        .catch((err) => console.log(err))
}

export function deleteDesire(id) {
    return axios.delete(`https://looking-server.herokuapp.com/api/v1/delete-desire/${id}`)
        .then(response => response.data)
        .then(() => ({
            type: DELETE_DESIRE,
            id
        }))
        .catch((err) => console.log(err))

}