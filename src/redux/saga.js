import { takeLatest, takeEvery } from 'redux-saga/effects';
import { GET_DATA } from './constants';

function* fetchData() {
    alert("this is good ");
}
function* sagas() {
    yield takeLatest(GET_DATA, fetchData)
}
export default sagas;