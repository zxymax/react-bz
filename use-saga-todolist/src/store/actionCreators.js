import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INITDATA,
  GET_LIST,
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

export const getList = () => ({
  type: GET_LIST,
});
