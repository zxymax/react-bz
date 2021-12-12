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

### todolist优化

```jsx
// 将渲染出来的list封装成方法
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

// 调用方法
<ul>
  { this.getTodoItem() } 
</ul>
```


```jsx
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
```

#### PropTypes

```jsx
import PropTypes from 'prop-types'
TodoItem.propTypes = {
  content: PropTypes.string.isRequired
}

// week父组件没有传 默认传值
TodoItem.defaultProps = {
  week: 'sunday'
}
```jsx

> - 当父组件的render函数被执行时它的子组件的render都将被重新运行

#### 虚拟DOM (虚拟DOM就是一个JS对象，用它来描述真实DOM)
- 1. state - 数据
- 2. jsx模板
- 3. state数据 + jsx模板 结合生成真实的DOM
- 4. state 若发生改变
- 5. state数据 + jsx模板 结合生成真实的DOM，替换原来的DOM
> 缺陷：
> > - 第一次生成了一个完整的DOM片段
> > - 第二次生成了一个完整的DOM片段
> > - 第二次的DOM替换第一次的DOM非常消耗性能

- 1. state - 数据
- 2. jsx模板
- 3. state数据 + jsx模板 结合生成真实的DOM
- 4. state 若发生改变
- 5. state数据 + jsx模板 结合生成真实的DOM，并不替换原来的DOM
- 6. 新的DOM 和原来的DOM做对比
- 7. 找出局部变化了元素
- 8. 只用新的DOM中发生变化了的局部元素，替换掉老的DOM中的被改变的局部元素
> 缺陷：
> > - 性能提升不明显

- 1. state - 数据
- 2. jsx模板
- 3. state数据 + jsx模板 结合生成虚拟DOM
```js
['div', {id: 'abc'}, {'span', {}, 'hello span'}]
```
- 4. 用虚拟DOM的结构生成真实的DOM
```html
<div id="abc"><span>hello span<span></div>
```
- 5. state 若发生改变
- 6. state数据 + jsx模板生成新的虚拟DOM (极大的提升了性能)
```js
['div', {id: 'abc'}, {'span', {}, 'bye span'}]
```
- 7. 比较原始虚拟DOM和新的虚拟DOM的区别，找出区别是span中的内容
- 8. 直接操作DOM，改变span中的内容
> 优点：
> > - 性能提升了(DOM的比对是JS对象之间的比对)
> > - 它是的跨端应用得以实现，React Native

### Diff
- React的虚拟DOM是同层比对的

#### Ref 尽量避免使用
- ref是帮助在React里面直接获取DOM元素的时候来使用的
- 比如在做动画的时候使用获取DOM元素
- ref和setState一起用的时候 setState异步函数 在setState第二个参数回调函数使用
```jsx
handleClick() {
  if (this.state.inputValue === '') return
  this.setState((prevState) => ({ // 此处的参数prevState===等价于 this.state 是为了防止直接修改state的值
    list: [...prevState.list, prevState.inputValue],
    inputValue: ''
  }), () =>{
    console.log(this.ul.querySelectorAll('li').length)
  })
}
```

#### 生命周期
- componentWillMount() React 17版本以弃用
- render()
- componentDidMount() 组件加载页面之后自动执行
- shouldComponentUpdate() 组件更新之前自动执行 返回boolean值
```jsx
// TodoItem.js 子组件
shouldComponentUpdate(nextProps, nextState) {
  if (nextProps.content !== this.props.content) {
    return true
  } else {
    return false
  }
}
```
- componentWillUpdate(nextProps, nextState) 是否执行取决于 shouldComponentUpdate的值 true执行 false不执行
- componentWillReceiveProps 1 从父组件接收到参数 2 如果这个组件第一次存在于父组件中，不会执行 3 如果这个组件之前已经存在于父组件中，才会执行
- componentDidUpdate()  除了首次render之后调用的是componentDidMount 其他render结束之后调用的都是componentDidUpdate
- componentWillUnmount() 组件卸载之前执行

#### charles软件实现本地模拟数据

#### axios 请求数据 axios放在componentDidMount函数里

```jsx
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
```
