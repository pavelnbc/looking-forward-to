import { connect } from 'react-redux';

import DesireList from '../components/DesireList';
import { deleteDesire, deleteComment, completeDesire, editDesire, openEditForm, openDescriptionField, addComment } from '../actions'

function mapStateToProps(state) {
    return {
        desires: state.desires
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleDelete: (id) => dispatch(deleteDesire(id)),

        handleCheck: (id) => dispatch(completeDesire(id)),
        handleEdit: (id, title) => dispatch(editDesire(id, title)),
        openForm: (id) => dispatch(openEditForm(id)),
        openDescription: (id) => dispatch(openDescriptionField(id)),
        addDesireComment: (id, comment) => dispatch(addComment(id, comment)),
        handleCommentDelete: (id, commentId) => dispatch(deleteComment(id, commentId))
    }
}

const DesireListContainer = connect(mapStateToProps, mapDispatchToProps)(DesireList);

export default DesireListContainer