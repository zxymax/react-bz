import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handleChagne(e) {
    this.setState({
      inputValue: e.target.value
    })
    console.log(e.target.value)
  }

  handleItemDel(_id) {

    console.log(_id)
    // immutable
    // state不允许做任何的改变
    const list = [...this.state.list]  // 利用浅拷贝赋值最新的数组
    list.splice(_id, 1)
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChagne.bind(this)} />
        <button onClick={this.handleClick}>Button</button>
        <p>{this.state.inputValue}</p>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li onClick={this.handleItemDel.bind(this, index)} key={index}>{item}</li>
            })
          }
      </ul>
      </div>
    )
  }
}

export default TodoList
