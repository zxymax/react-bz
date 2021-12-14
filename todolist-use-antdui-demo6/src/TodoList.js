import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="todolist use antd design"
            style={{ width: "300px", marginRight: "5px" }}
          />
          <Button type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        ></List>
      </div>
    );
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
    console.log("store changed");
  }
  handleItemDelete(_id) {
    const action = {
      type: "delete_todo_item",
      _id,
    };
    store.dispatch(action);
  }
  handleSubmit() {
    if (this.state.inputValue === "") return false;
    const action = {
      type: "add_todo_item",
    };
    store.dispatch(action);
  }
}

export default TodoList;
