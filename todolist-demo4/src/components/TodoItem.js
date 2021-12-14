import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // nextProps 接下来 props会变成什么样子
    // nextState 接下来 state会变成什么样子
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  // 从父组件接收到参数
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  // componentWillReceiveProps() {
  //   console.log("componentWillRecieveProps");
  // }
  componentWillUnmount() {
    console.log("componentWillUnmount组件即将被卸载的时候执行");
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
}

export default TodoItem;
