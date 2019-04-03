## cdn
```
    <script src="https://cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="https://cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="https://cdn.bootcss.com/babel-standalone/6.22.1/babel.min.js"></script>
    实例中我们引入了三个库： react.min.js 、react-dom.min.js 和 babel.min.js：
```
## 安装
```
    npm install -g cnpm --registry=https://registry.npm.taobao.org  
    cnpm install -g create-react-app
    $ create-react-app my-app
    $ cd my-app/
    $ npm start
    注意：sudo ln -s create-react-app所在目录 /usr/local/bin/  才能使用该命令
```

## 小知识点

1. 在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。

2. 注释 
> 1. 在标签内部的注释需要花括号,注释需要写在花括号中，实例如下：  {/* 这个是注释呀 */} 
> 2. 在标签外的的注释不能使用花括号 

3. 数组内容展开 {arr}
> JSX 允许在模板中插入数组，数组会自动展开所有成员：
```
例:
    var arr = [
        <h1>菜鸟教程</h1>,
        <h2>学的不仅是技术，更是梦想！</h2>,
    ];
    ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById('example')
    );
``` 

4. 组件
- React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。
- 单标签需要注意 结尾处加 /;

```
方法1:
var Mycomponent=React.createClass({
    render:function () {
        return <h6>每天都进步</h6>
    }
})
直接用 ReactDOM.render(<Mycomponent/>,document.getElementById('example1'))
方法2:
var myelement = <Mycomponent someproperty={true} />;
ReactDOM.render(myelement,document.getElementById('example1'))
```

5. map的用法　
> 两种方法都可以,注释掉的是简便写法,不需要写return
 this.props.items.map(
    (item)=>{
        return (<li key={item.id}>{item.text}</li>)
    }
    //   item => (<li key={item.id}>{item.text}</li>)
)

6. 箭头函数

- 箭头函数没有自己this;
- 箭头函数没有prototype属性
- 箭头函数不能用作构造函数，并且在使用时会引发错误new。
- 箭头函数不能用作生成器　（yield关键字可能无法在箭头函数体中使用）

```
例:
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
1. 
    elements.map(element => {
    return element.length;
    });
    在块体中，您必须使用明确的return语句。　｛｝　属于块体
2. 
    elements.map(element => element.length );
    则不需要return;
```

写页面　
bootstrap
vue. element
react ant design

7. state 和 props
```
只可在constructor函数里这么写
this.state = {
    date : new Date()
}

其余的地方需要this.setState({date: new Date()});

```
- {...this.props} 接收所有的属性
- this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。
```
不能这么使用
    this.setState({
    counter: this.state.counter + this.props.increment,
    }); 

    this.setState((prevState,props)=>({counter:this.state.counter + this.props.increment}))
    或者
    this.setState(function(prevState,props){
        return {
            counter:this.state.counter + this.props.increment
        }
    })
```

8. 数据传递
```
例:
    <FormattedDate date={this.state.date} />

    function FormattedDate(props) {
        return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
    }
```
- 这通常被称为自顶向下或单向数据流。 任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。

9. 事件绑定
> this.handleClick = this.handleClick.bind(this);
- 你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
- 这并不是 React 的特殊行为；它是函数如何在 JavaScript 中运行的一部分。通常情况下，如果你没有在方法后面添加 () ，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

```
避免使用箭头函数
<button onClick={(e) => this.handleClick(e)}>
    Click me
</button>
如果你没有使用属性初始化器语法，你可以在回调函数中使用 箭头函数：然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。
注意 : 我们通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。
```

10. &&运算符应用
```
{unreadMessages.length > 0 &&
    <h2>
        You have {unreadMessages.length} unread messages.
    </h2>
}
```
- 运算符　&& ,如果前边的成立，则后边的可以显示
- 之所以能这样做，是因为在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。
- 因此，如果条件是 true && 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。

当元素没有确定的id时，你可以使用他的序列号索引index作为key,万不得已，你可以传递他们在数组中的索引作为key。若元素没有重排，该方法效果不错，但重排会使得其变慢。(部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算。这被称为重排。)
```
const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
);
```

## 组件的生命周期　　
> 组件的生命周期分成三个状态：

- Mounting：已插入真实 DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实 DOM
- React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。

```
componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()

此外，React 还提供两种特殊状态的处理函数。
componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

```
## 总结一下，主要有以下几点：

- ReactJs是基于组件化的开发，所以最终你的页面应该是由若干个小组件组成的大组件。

- 可以通过属性，将值传递到组件内部，同理也可以通过属性将内部的结果传递到父级组件(留给大家研究)；要对某些值的变化做DOM操作的，要把这些值放到state中。

- 为组件添加外部css样式时，类名应该写成className而不是class;添加内部样式时，应该是style={{opacity: this.state.opacity}}而不是style="opacity:{this.state.opacity};"。

- 组件名称首字母必须大写。
- 变量名用{}包裹，且不能加双引号。
- 但是记住，如果 map() 体中有太多嵌套，可能是提取组件的好时机。


## 优点：
1. React速度很快，在UI渲染过程中，React通过在虚拟DOM中的微操作来实对现实际DOM的局部更新。
2. 跨浏览器兼容　甚至在IE8中都是没问题的。
3. 模块化
> 为你程序编写独立的模块化UI组件，这样当某个或某些组件出现问题是，可以方便地进行隔离。
每个组件都可以进行独立的开发和测试，并且它们可以引入其它组件。这等同于提高了代码的可维护性。
4. 单向数据流让事情一目了然

## 受控组件应用
- select标签的默认选中　因为它的 selected 属性。React 中，并不使用这个 selected 属性，而是在根 select 标签中使用了一个 value 属性。这使得受控组件使用更方便，因为你只需要更新一处即可。
- 总的来说，这使 <input type="text">， <textarea> 和 <select> 都以类似的方式工作 —— 它们都接受一个 value 属性可以用来实现一个受控组件。
- 您可以将一个数组传递给 value 属性，允许你在 select 标签中选择多个选项：<select multiple={true} value={['B', 'C']}>


## 默认属性和属性类型
可以 const defaultProps ={
    username: "dsadsa"
}
//验证一些属性
类名.propTypes = {
    userID : React.PropTypes.number.isRequired
}

## ref
- ref  访问组件内部DOM节点唯一可靠的方法
- 不再render 或render之前调用
- 会自动销毁对子组件的引用
- 不要滥用refs 不符合react的理念

1. 第一种方式 原声获取 //性能 安全 不好 回归到html的
```
var ele=document.getElementById("ele");
ReactDOM.findDOMNode(ele).style.color ="red";
```
2. 第二种
```
元素中 定义 <input ref="submitButton" />
事件中  this.refs.submitButton.style.color = "red"
```

## mixins

## React用于this.props.children访问组件的子节点。
- 请注意，价值this.props.children有三种可能性。如果组件没有子节点，则值为undefined; 如果单个子节点，一个对象; 如果有多个子节点，则为数组。你应该小心处理它。

- React为我们提供了一个React.Children处理this.props.children不透明数据结构的实用程序。
- 您可以使用React.Children.map迭代this.props.children而不必担心其数据类型是undefined或object。查看官方文档了解更多方法React.Children。
```
<ol>
    {
    React.Children.map(this.props.children, function (child) {
        return <li>{child}</li>;
    })
    }
</ol>

<NotesList>
    <span>hello</span>
    <span>world</span>
</NotesList>,

```