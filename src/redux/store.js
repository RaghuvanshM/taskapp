import { createStore, combineReducers,applyMiddleware } from 'redux';
import reducer from './reducer';
//import createSagaMiddleware from 'redux-saga'
const configureStore = () => {
return createStore(reducer);
}
export default configureStore; 