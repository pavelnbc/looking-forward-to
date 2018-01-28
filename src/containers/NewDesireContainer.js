import { connect } from 'react-redux';

import NewDesire from '../pages/NewDesire';
import { addDesire } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        handleAdd: (desire, description) => dispatch(addDesire(desire, description))
    }
}

const NewDesireContainer = connect(null, mapDispatchToProps)(NewDesire);

export default NewDesireContainer