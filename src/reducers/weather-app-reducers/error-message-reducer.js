const SET_CURRENT_ERROR_MESSAGE = 'SET_CURRENT_ERROR_MESSAGE';
const INITIAL_STATE = {
    currentErrorMessage: ''
}
const errorMessageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_ERROR_MESSAGE:
            return {
                ...state,
                currentErrorMessage: action.payload
            }
        default:
            return state;
    }
}
export default errorMessageReducer;