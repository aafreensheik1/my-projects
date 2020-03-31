import { createStore, applyMiddleware } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import rootReducer from '../reducers/weather-app-reducers/root-reducer';
const sagaMiddleware = createMiddlewareSaga();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// then run the saga
//sagaMiddleware.run(mySaga)
export default store;