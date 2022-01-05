import { expectSaga } from 'redux-saga-test-plan';
import { LoggerAction } from "../logger-action";
import { LoggerSaga } from "../logger-saga";

it('should dispatch logger event', () => {
    const action = {
        type: "Action Type",
        payload: "Action Payload"
    };
    return expectSaga(LoggerSaga)
        .dispatch(action)
        .put(LoggerAction.dispatched(action))
        .silentRun();
});
