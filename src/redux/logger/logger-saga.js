import {
	put,
	takeEvery
} from 'redux-saga/effects';
import { LoggerTypes } from './logger-types';
import { LoggerAction } from './logger-action';

const dispatched = function* (action) {
	if (action.type !== LoggerTypes.DISPATCHED) {
		yield put(LoggerAction.dispatched(action));
	}
};

export const LoggerSaga = function* () {
	yield takeEvery('*', dispatched);
};
