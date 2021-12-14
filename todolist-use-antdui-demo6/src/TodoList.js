import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreators";

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
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
    console.log("store changed");
  }
  handleItemDelete(_id) {
    const action = getDeleteItemAction(_id);
    store.dispatch(action);
  }
  handleSubmit() {
    if (this.state.inputValue === "") return false;
    const action = getAddItemAction();
    store.dispatch(action);
  }
}

export default TodoList;
