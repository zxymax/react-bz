import { INITIAL_LIST, GET_LIST } from "./actionTypes";

export const getInitialList = (data) => ({
  type: INITIAL_LIST,
  data,
});

export const getList = () => ({
  type: GET_LIST,
});
