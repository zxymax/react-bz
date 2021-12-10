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
