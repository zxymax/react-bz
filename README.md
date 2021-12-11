### React
- npm -v 5.5.1
- node 7.10.1

#### install react-cli
- npm install -g create-react-app

#### create-react-app 创建react
- create-react-app todolist 旧版本使用方式
- npx create-react-app todolist 最新版本使用方式

> todolist/
> > node_modules/
> > public/
> > src/
> > > index.js 整个项目的入口文件
> > .gitignore
> > package.json
> > README.md
> > yarn.lock

#### this
- React 方法中的this 默认指向undefined 
- 需要bind绑定this 改变指向组件
- e: this.handleClick.bind(this)
- 在constructor中修改this指向 this.handleClick = this.handleClick.bind(this)

#### state
- 更改state值需要使用 setState来修改

```jsx
  <ul>
    {
      this.state.list.map((item, index) => { // 不要使用index做key值
        return <li key={index}>{item}</li>
      })
    }
</ul>
```
```jsx
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

```

#### jsx注释
```jsx
{ 
   // todolist
}
{
   /**
     * todolist
     * */
}
```

#### clasName 定义Css样式类名
#### dangerouslySetInnerHTML 是React为浏览器DOM提供innerHTML的替换方案
- __html 是两个下划线 item为内容
```jsx
this.state.list.map((item, index) => {
  return <li dangerouslySetInnerHTML={{__html: item}}></li>
  })
```
#### htmlFor 替代了label中的for 


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
