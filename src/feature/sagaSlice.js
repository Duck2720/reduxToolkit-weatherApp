import { getCity, getCitySuccess, getDataSuccess } from "./weatherSlice";
import { takeEvery, put } from "redux-saga/effects";

import getApi from "../api/api";

function* handleGetData(action) {
  try {
    const dataCity = yield getApi.getDataCity(action.payload);
    yield put(getCitySuccess(dataCity));
    const city = {
      latitude: dataCity.coord?.lat,
      longtitude: dataCity.coord?.lon,
    };
    const respon = yield getApi.getData(city);
    yield put(getDataSuccess(respon));
  } catch (error) {
    console.log("error", error);
  }
}

export function* watchGetData() {
  yield takeEvery(getCity.type, handleGetData);
}
