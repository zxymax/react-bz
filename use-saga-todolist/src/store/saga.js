import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GET_LIST } from "./actionTypes";
import { getInitDataList } from "./actionCreators";

function* getInitList() {
  const arr = [];
  try {
    const res = yield axios.get("https://jsonplaceholder.typicode.com/todos");
    res.data.map((item, index) => {
      if (index < 10) {
        arr.push(item.title);
      }
    });
    const action = getInitDataList(arr);
    yield put(action);
  } catch (e) {
    console.log(e, "网络请求失败");
  }
}

function* todoSagas() {
  yield takeEvery(GET_LIST, getInitList);
}

export default todoSagas;
