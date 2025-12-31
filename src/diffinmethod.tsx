import React from "react";

class App extends React.Component {
  state = {       //diff算法当数据改变时，react会生成新的虚拟dom和旧的虚拟dom进行对比，有不同的节点则重新生成，节点相同则进行复用，不重新生成，提高渲染速度
    //只生成不同的节点原来相同部分不重新渲染
    list: [
      { id: 1, name: "冰冰", hobby: "喝奶茶" },
      { id: 2, name: "anna", hobby: "喝奶茶" },
      { id: 3, name: "老帆", hobby: "打篮球" },
    ],
  };
// key主要用在 Vue 虚拟 DOM（类似 js 对象格式的数据） 的 Diff 算法，新旧虚拟 DOM 对比，复用不变的旧节点，渲染改变的节点，提高渲染速度
// 遍历数组不加key属性时，则默认使用数组的索引index，在数组元素顺序打乱时，会产生不必要的DOM更新
// key值要使用唯一的id值
//使用index作为key时 当数组进行增删时 会改变index对应的元素 会引起重新渲染 所以不能使用incex作为key
  addClick = () => {
    const newItem = { id: 4, name: "老王", hobby: "按摩" };
    this.setState({ list: [newItem, ...this.state.list] });
  };

  // 一.使用index作为key值
  // 初始数据
  // { id:1,name: "冰冰", hobby: "喝奶茶" },
  // { id:2,name: "anna", hobby: "逛街" },
  // { id:3,name: "老帆", hobby: "打篮球" },

  // 初始虚拟dom
  // <li key=0>名字：冰冰，爱好：喝奶茶</li>
  // <li key=1>名字：anna，爱好：逛街</li>
  // <li key=2>名字：老帆，爱好：打篮球</li>

  // 更新后的数据
  // { id:4,name: "老王", hobby: "按摩" },
  // { id:1,name: "冰冰", hobby: "喝奶茶" },
  // { id:2,name: "anna", hobby: "逛街" },
  // { id:3,name: "老帆", hobby: "打篮球" },

  // 更新后的虚拟dom
  // <li key=0>名字：老王，爱好：喝奶茶</li>
  // <li key=1>名字：冰冰，爱好：喝奶茶</li>
  // <li key=2>名字：anna，爱好：逛街</li>
  // <li key=3>名字：老帆，爱好：打篮球</li>

  // 二.使用唯一值id作为key值
  // 初始数据
  // {id:1, name: "冰冰", hobby: "喝奶茶" },
  // {id:2,name: "anna", hobby: "逛街" },
  // {id:3, name: "老帆", hobby: "打篮球" },

  // 初始虚拟dom
  // <li key=1>名字：冰冰，爱好：喝奶茶</li>
  // <li key=2>名字：anna，爱好：逛街</li>
  // <li key=3>名字：老帆，爱好：打篮球</li>

  // 更新后的数据
  // {id:4, name: "老王", hobby: "按摩" },
  // {id:1, name: "冰冰", hobby: "喝奶茶" },
  // {id:2, name: "anna", hobby: "逛街" },
  // {id:3, name: "老帆", hobby: "打篮球" },

  // 更新后的虚拟dom
  // <li key=4>名字：老王，爱好：喝奶茶</li>
  // <li key=1>名字：冰冰，爱好：喝奶茶</li>
  // <li key=2>名字：anna，爱好：逛街</li>
  // <li key=3>名字：老帆，爱好：打篮球</li>

  render() {
    return (
      <>
        <h1>小滴课堂人员列表</h1>
        <input type="text" />
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                名字：{item.name}，爱好：{item.hobby}
              </li>
            );
          })}
        </ul>
        <button onClick={this.addClick}>添加人员按钮</button>
      </>
    );
  }
}
export default App;