import React, { Component } from "react";
import { Input, Button, List } from "antd";

const TodoListUI = (props) => {
  return (
    <div>
      <Input
        placeholder="Basic usage"
        style={{ width: "300px", marginRight: "5px" }}
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <Button type="primary" onClick={props.handleClick}>
        Add information
      </Button>
      <List
        size="large"
        style={{ width: "300px", marginTop: "5px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={(index) => {
              props.handleDeleteItem(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
