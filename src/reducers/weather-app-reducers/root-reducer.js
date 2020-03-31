import { combineReducers } from 'redux';
import queryReducer from './query-reducer';
import weatherReducer from './weather-reducer';
import errorMessageReducer from './error-message-reducer';

export default combineReducers({
    query: queryReducer,
    weather: weatherReducer,
    errorMessage: errorMessageReducer
});