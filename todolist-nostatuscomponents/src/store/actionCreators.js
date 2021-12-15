import axios from "axios";

import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INITDATA,
} from "./actionTypes";

export const getInputChangeValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM,
});

export const getDeleteItem = (id) => ({
  type: DELETE_TODO_ITEM,
  id,
});

export const getInitDataList = (data) => ({
  type: INITDATA,
  data,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data[0]);
        const arr = [];
        res.data.map((item, index) => {
          if (index < 10) {
            arr.push(item.title);
          }
        });
        const action = getInitDataList(arr);
        dispatch(action);
      })
      .catch((err) => console.log(err));
  };
};
