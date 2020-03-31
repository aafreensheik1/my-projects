const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const INITIAL_STATE = {
    currentWeather: ''
}
const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload
            }
        default:
            return state;
    }
}
export default weatherReducer;