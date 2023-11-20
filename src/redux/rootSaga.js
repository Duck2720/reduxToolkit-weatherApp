import { all } from "redux-saga/effects";
import { watchGetData } from "../feature/sagaSlice";

export function* rootSaga() {
  yield all([watchGetData()]);
}
