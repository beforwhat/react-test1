import React from "react";

class App extends React.Component {
  state = { value: "小滴课堂" };
  handleSubmit = () => {
    // e.preventDefault();
    // alert(this.name.value); 非受控组件 由组件自身来管理其状态的组件 没有使用state setstate() 来管理状态
    // this.setState({ value: event.target.value }); 通过组件内部维护state，state属性和表单元素的值建立依赖关系，
    // 再通过onChange事件与setState()结合更新state属性，就能达到控制用户输入过程中表单发生的操作，控制取值的表单输入元素就叫做受控组件（类似vue的数据双向绑定）
    //通过onChange和setState来进行双向绑定(随着状态改变来实现组件数据改变)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字: 
          {/* <input type="text" ref={(a) => (this.name = a)} /> */} 
          {/* <input  受控组件
            value={this.state.value}
            type="text"
            onChange={this.handleChange}
          /> */}
        </label>
        <button type="submit">提交</button>
      </form>
    );
  }
}
export default App;