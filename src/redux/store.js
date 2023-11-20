import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import weatherReducer from "../feature/weatherSlice";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
