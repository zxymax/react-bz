import React from "react";
import { connect } from "react-redux";
import { Button, Input, List } from "antd";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./store/actionTypes";
import { getList } from "./store/actionCreators";
import store from "./store";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputValue, list, handleChangeInput, handleClick, deleteItem } =
      this.props;
    return (
      <div>
        <h1>Hello ReactJS React-Redux</h1>
        <Input
          type="text"
          style={{ width: "300px", marginRight: "5px" }}
          value={inputValue}
          onChange={handleChangeInput}
        />
        <Button onClick={handleClick}>Add todo</Button>
        <List
          size="small"
          style={{ width: "300px", marginTop: "5px" }}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                deleteItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }

  componentDidMount() {
    const action = getList();
    store.dispatch(action);
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInput(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value,
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: ADD_TODO_ITEM,
      };
      dispatch(action);
    },
    deleteItem(id) {
      const action = {
        type: DELETE_TODO_ITEM,
        id,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
