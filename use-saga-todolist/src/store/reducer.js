import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INITDATA,
} from "./actionTypes";

export default (state = { inputValue: "", list: [1, 2] }, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.id, 1);
    return newState;
  }

  if (action.type === INITDATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, ...action.data];
    return newState;
  }

  return state;
};
