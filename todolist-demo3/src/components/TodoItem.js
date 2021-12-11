import React, { Component } from 'react'
import PropTypes  from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { delItem, index } = this.props
    delItem(index)
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.week}-{this.props.content}</li>
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired
}

// week父组件没有传 默认传值
TodoItem.defaultProps = {
  week: 'sunday'
}


export default TodoItem

