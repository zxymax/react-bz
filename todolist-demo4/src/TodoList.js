import React, { Component } from 'react'
import axios from 'axios'

import TodoItem from './components/TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: []
    }

    this.changeValue = this.changeValue.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.delItem = this.delItem.bind(this)
  }

  changeValue(e) {
    this.setState((prevState) =>({
      inputValue: e.target.value 
    }))
  }

  handleClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  delItem(_id) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(_id, 1)
      return { list }
    })
  }

  getTodoList() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.delItem}
        />
      )
    })
  }

  componentWillMount() {
    console.log('componentWillMount: 在组件即将挂载页面的时候自动执行')
  }

  componentDidMount() {
    console.log('componentDidMount: 组件被挂载页面之后自动执行')
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {  
        const arr = data.data.map((item, i) => {
          if (i < 10) {
            return JSON.stringify(item)
          }
        })
        console.log()
        this.setState((prevState)=> {
          return {
            list: [...prevState.list, arr]
          }
        })
      })
      .catch(err => console.log(err))
  }

  shouldComponentUpdate() {
    console.log('father: 组件被更新之前，自动执行 需要返回boolean值')
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate:是否执行取决于 shouldComponentUpdate的返回值')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }


  render() {
    return (
      <div>
        <label htmlFor="insertContent">entery: </label>
        <input 
          type="text" 
          id="insertContent"
          onChange={this.changeValue}
          value={this.state.inputValue}  
        />
        <button onClick={this.handleClick}>Add</button>
        <ul>
          { this.getTodoList() }
        </ul>
      </div>
    )
  }
}

export default TodoList
