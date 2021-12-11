### props 组件传值
> 父组件向子组件传值 子组件通过props接收

```jsx
// 父组件
<ul>

  {
    this.state.list.map((item, index) => {
      return <TodoItem content={item}/>   // 这是子组件 content为传递内容的变量 item为子组件接收的内容
    })
  }
</ul>
```
```jsx
// 子组件
class TodoItem extends Component {
  render() {
    return <li>{this.props.content}</li> // 通过props接收父组件传递过来的内容
  }
}
```

> 子组件向父组件传值 通过事件传递

```jsx
// 父亲组件需要改变this指向使用bind绑定this，将方法和内容索引值传递给子组件
<ul>
  {
    this.state.list.map((item, index) => {
      return <TodoItem handleItemDel={this.handleItemDel.bind(this)} content={item} key={index} index={index} />
    })
  }
</ul>
// 通过触发子组件的方法调用父组件的方法

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() { // 子组件的方法
    this.props.handleItemDel(this.props.index)
  }
  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>
  }
}
```
