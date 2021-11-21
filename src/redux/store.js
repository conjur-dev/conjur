import {
	applyMiddleware,
	combineReducers,
	createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
	all,
	call,
	fork
} from 'redux-saga/effects';
import { LoggerReducer } from './logger/logger-reducer';
import { LoggerSaga } from './logger/logger-saga';

const saga = createSagaMiddleware();

export const Store = createStore(combineReducers({
	LoggerReducer
}), applyMiddleware(saga));

saga.run(function* () {
	yield all([
		call(LoggerSaga),
		...[].map(fork)
	]);
});
