import React, { Component } from "react";
import store from "./store";
import {
  getInputChangeValue,
  getAddTodoItem,
  getDeleteItem,
  getTodoList,
} from "./store/actionCreators";

import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange);
    const action = getTodoList();
    store.dispatch(action);
  }

  handleChange(e) {
    const action = getInputChangeValue(e.target.value);
    store.dispatch(action);
  }

  handleClick() {
    if (this.state.inputValue === "") return false;
    const action = getAddTodoItem();
    store.dispatch(action);
  }

  handleDeleteItem(id) {
    const action = getDeleteItem(id);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }
}

export default TodoList;
