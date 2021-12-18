import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GET_LIST } from "./actionTypes";
import { getInitialList } from "./actionCreators";

function* getList() {
  const arr = [];
  try {
    const res = yield axios.get("https://jsonplaceholder.typicode.com/users");
    res.data.map((item, index) => {
      arr.push(item.name);
    });
    const action = getInitialList(arr);
    yield put(action);
  } catch (e) {
    console.log(e, "网络请求错误");
  }
}

function* todoSaga() {
  yield takeEvery(GET_LIST, getList);
}

export default todoSaga;
