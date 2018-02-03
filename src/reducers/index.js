import desireReducer from './desireReducer';

function reducer(state = {}, action) {
    return {
        desires: desireReducer(state.desires, action)
    }
}

export default reducer