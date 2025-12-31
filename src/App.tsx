import React from 'react'
interface Aprops{
  text: string
}
// function App(props:Aprops) {

//   return (
//     <>
//       <div>
//       <h1 style={{color:"red" ,fontSize:"30px",textAlign:"center"}}>第一个react项目</h1>
//       <span>{props.text}第一次</span>
//       </div>
//     </>
//   )
// }
class Children extends React.Component{
  render(): React.ReactNode {
    return(
      <>
      <div>
        正在学习课程
      </div>
      </>
    )
  }
}
class App extends React.Component<Aprops>{
  constructor(props:Aprops){
    super(props)
    this.state = {isWash: true}
    this.handleClick = this.handleClick.bind(this) // this.handleClick 
  }
// prototype 代表了共享空间 所有实例共享该空间 并通过_proto_来指向该空间 构造函数外部的属性是实例自身的 构造函数内部的this属性也是实例自身的 handle = () =>{实例自身的}
// handleClick是定义在this 的protype上的需要使用 this调用 render中调用函数是在局部范围找 
// this指向实例 所以可以找到该方法
  render() {
    // console.log(this)
    return (
      <>
      <Children/>
      <div><h1>{this.props.text}类组件</h1></div>
      <div onClick={this.handleClick}>今天{this.state?"去":"没去"}</div>
      </>
    )
    
  } // render() react自动有实例调用 this指向实例  handleClick() 则不行所以 this指向全局对象为undefined
  handleClick(){ // this指向的是 调用对象 函数需要
    this.setState({isWash: false}) // handleClick调用 this时 this是指向handileClick的 会找不到setState this.handleClick.bind(this)
    // bind会返回一个新函数 并且将新函数的this绑定 到第一个参数上  .bind(this) this这个参数this是指向类实例的 所以新函数this指向类实例
    console.log("点击了")
  }
}
export default App
