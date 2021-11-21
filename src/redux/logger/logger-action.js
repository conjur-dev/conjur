import { LoggerTypes } from './logger-types';

const dispatched = action => ({
	type: LoggerTypes.DISPATCHED,
	payload: action
});

export const LoggerAction = {
	dispatched
};
