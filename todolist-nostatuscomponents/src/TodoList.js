import React, { Component } from "react";
import axios from "axios";
import store from "./store";
import {
  getInputChangeValue,
  getAddTodoItem,
  getDeleteItem,
  getInitDataList,
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
        store.dispatch(action);
        console.log(this.state);
      })
      .catch((err) => console.log(err));
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
