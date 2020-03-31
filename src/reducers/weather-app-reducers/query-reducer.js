const SET_CURRENT_QUERY = 'SET_CURRENT_QUERY';

const INITIAL_STATE = {
    currentQuery: ''
}

const queryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_QUERY:
            return {
                ...state,
                currentQuery: action.payload
            }
        default:
            return state;
    }
}
export default queryReducer;