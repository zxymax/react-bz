import React from 'react'

import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      list: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemDel = this.handleItemDel.bind(this)
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    console.log(e.target.value)
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    }) 
  }
  handleItemDel(_id) {
    console.log(_id)
    const list = [...this.state.list]
    list.splice(_id, 1)
    this.setState({
      list
    })
  }
  render() {
    return (
      <div>
        <label htmlFor="addContent"></label>
        <input type="text" id="addContent" onChange={this.handleChange} value={this.state.inputValue} />
        <button onClick={this.handleClick}>Add</button>

              <TodoItem />
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem handleItemDel={this.handleItemDel} content={item} key={index} index={index} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList
