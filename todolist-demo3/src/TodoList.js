import React, { Component } from 'react'
import TodoItem from './components/TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelItem = this.handleDelItem.bind(this)
  }

  handleChange(e) {
    const value = e.target.value // 需要对e.target.value进行保存一下
    this.setState(() => ({ // 此处的setState是一个异步函数
      inputValue: value
    }))
  }

  handleClick() {
    if (this.state.inputValue === '') return
    this.setState((prevState) => ({ // 此处的参数prevState===等价于 this.state 是为了防止直接修改state的值
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState(() => ({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // }))
  }
  handleDelItem(_id) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(_id, 1)
      return { list }
    })
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          delItem={this.handleDelItem}  
          key={index} 
          index={index}
          content={item} 
        />
      )
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="insertContent">Enter your Content: </label>
        <input 
          type="text" 
          id="insertContent" 
          value={this.state.inputValue} 
          onChange={this.handleChange} 
        />
        <button onClick={this.handleClick}>Add</button>
        <ul>
          { this.getTodoItem() } 
        </ul>
      </div>
    )
  }
}

export default TodoList
