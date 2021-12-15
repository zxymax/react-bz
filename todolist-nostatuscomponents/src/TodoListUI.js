import React, { Component } from "react";
import { Input, Button, List } from "antd";

class TodoListUI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Input
          placeholder="Basic usage"
          style={{ width: "300px", marginRight: "5px" }}
          value={this.props.inputValue}
          onChange={this.props.handleChange}
        />
        <Button type="primary" onClick={this.props.handleClick}>
          Add information
        </Button>
        <List
          size="large"
          style={{ width: "300px", marginTop: "5px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={(index) => {
                this.props.handleDeleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;
