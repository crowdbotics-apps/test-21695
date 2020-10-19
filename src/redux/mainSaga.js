import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView1148963Saga from '../features/CalendarView1148963/redux/sagas';
import CalendarView3148961Saga from '../features/CalendarView3148961/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView1148963Saga,
CalendarView3148961Saga,
    
  ]);
}