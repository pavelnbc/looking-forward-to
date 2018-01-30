import { DOWNLOAD_DESIRES,
         ADD_DESIRE,
         COMPLETE_DESIRE,
         EDIT_DESIRE,
         DELETE_DESIRE,
         OPEN_DESCRIPTION_FIELD,
         OPEN_EDIT_FORM,
         ADD_COMMENT
       }
from '../actions';

function desireReducer(state = [], action) {
    switch(action.type) {
        case DOWNLOAD_DESIRES:
            return action.desires;

        case ADD_DESIRE:
            let closed_desription_fields = state.filter((desire) => {
                desire.isDescriptionOpen = false;
                desire.isEditing = false;

                return desire
            });
            return [...closed_desription_fields, action.desire];

        case COMPLETE_DESIRE:
            let complete_desires = state.filter((desire) => {
                if(desire.id === action.id) {
                    desire.isCompleted = !desire.isCompleted;
                    desire.isDescriptionOpen = false
                }

                desire.isEditing = false;

                return desire
            });

            return complete_desires;

        case OPEN_EDIT_FORM:
            let opened_desire_form = state.filter((desire) => {
                if(desire.id === action.id) {
                    desire.isEditing = true
                } else {
                    desire.isEditing = false
                }

                desire.isDescriptionOpen = false

                return desire
            });

            return opened_desire_form;

        case OPEN_DESCRIPTION_FIELD:
            let opened_fields = state.filter((desire) => {
                if(desire.id === action.id) {
                    desire.isDescriptionOpen =  !desire.isDescriptionOpen
                } else {
                    desire.isDescriptionOpen = false
                }

                desire.isEditing = false;

                return desire
            });

            return opened_fields;

        case EDIT_DESIRE:
            let edited_desires = state.filter((desire) => {
               if(desire.id === action.id) {
                   desire.title = action.title;
                   desire.isEditing = false;
               }
               return desire
            });

            return edited_desires;

        case DELETE_DESIRE:
            let delete_desires = state.filter((desire) => {
                return desire.id !== action.id
            });

            return delete_desires;

        case ADD_COMMENT:
            let comment_desires = state.filter((desire) => {
                if(desire.id === action.id) {
                    desire.comments.push(action.comment)
                }

                return desire
            });

            return comment_desires;

        default:
            return state;



    }
}

export default desireReducer