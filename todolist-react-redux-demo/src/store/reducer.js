import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INITIAL_LIST,
  GET_LIST,
} from "./actionTypes";
const defaultState = {
  inputValue: "Hello world",
  list: [],
};
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    if (newState.inputValue !== "") {
      newState.list = [...newState.list, newState.inputValue];
      newState.inputValue = "";
    }
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.id, 1);
    return newState;
  }
  if (action.type === INITIAL_LIST) {
    newState.list = [...newState.list, ...action.data];
    console.log(action);
    return newState;
  }
  return state;
};
