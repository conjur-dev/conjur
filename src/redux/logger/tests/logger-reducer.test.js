import { LoggerAction } from "../logger-action";
import { LoggerReducer } from "../logger-reducer";

it('should return initial state', () => {
    expect(LoggerReducer(undefined, {})).toEqual({
        history: []
    });
});

it('should append new action to history', () => {
    const action = {
        type: "Action Type",
        payload: "Action Payload"
    };
    expect(LoggerReducer(undefined, LoggerAction.dispatched(action))).toEqual({
        history: [action]
    });
});
