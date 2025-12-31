import React from "react";

class App extends React.Component {
//   inputRef = React.createRef() 创建ref容器 创建了一个容器只能绑定一个节点，绑定多个节点会被覆盖
  popClick = () => {
    console.log(this)
    // const { inputRef } = this.refs 字符串赋值形式新版react中已经弃用
    // alert(this.input1.value)
  };

//   refValue = (a) =>{
//     this.input1 = a
//   }
  render() {
    return (
      <>
        {/* <input ref="inputRef" type="text" placeholder="请输入内容" /> */}
         {/* <input
          ref={(a) => (this.input1 = a)}/ref = {this.refValue} 通过回调函数指定 ref的值 ref属性用于获取输入内容 input1为自己指定的属性方便获取内容
          ref = {this.inputRef}
          type="text"       如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次 通过将 ref 的回调函数定义成 class 的绑定函数可以避免这个问题
          placeholder="请输入内容"
        /> */}
        <button onClick={this.popClick}>点击生成弹窗</button>
      </>
    );
  }
}
export default App;