import { createReducer } from '../utils';
import { LoggerTypes } from './logger-types';

const initialState = {
	history: []
};

const dispatched = (state, payload) => ({
	...state,
	history: [
		...state.history,
		payload
	]
});

export const LoggerReducer = createReducer(initialState, {
	[LoggerTypes.DISPATCHED]: dispatched
});
