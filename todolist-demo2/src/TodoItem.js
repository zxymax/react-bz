import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {handleItemDel, index } = this.props
    handleItemDel(index)
  }
  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>
  }
}

export default TodoItem
