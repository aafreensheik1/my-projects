import { combineReducers } from 'redux';
import queryReducer from './query-reducer';
import weatherReducer from './weather-reducer';

export default combineReducers({
    query: queryReducer,
    weather: weatherReducer
});