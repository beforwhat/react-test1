// react的路由 react-router 分类

// web使用

// react-router-dom 适用于web开发
// native使用

// react-router-native 适用于app端开发
// anywhere（使用麻烦）

// react-router
import React from "react";
// import About from "./components/About"; 打算跳转的页面
// import Home from "./components/Home";
// import { Link, Route, Routes } from "react-router-dom";//使用route 标签跳转  Link 标签用于创建跳转链接 routes 用于包裹一组Route组件 并根据URL路径匹配并渲染对应组件
// Route 路由规则定义器 ，定义路由的路径和组件
import "./app.css";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="all">
//         <div>
//           <div className="link">
//             {/* <Link to="/home">打开首页的页面</Link> */}
//           </div>
//           <div className="link">
//             {/* <Link to="/about">打开关于的页面</Link> */}
//           </div>
//         </div>
//         <div className="view">
//           {/* <Routes>
//             <Route path="/about" element={<About />} />
//             <Route path="/home" element={<Home />} />
//           </Routes> */}
//         </div>
//       </div>
//     );
//   }
// }
// import routes from "./routes"; 导入路由表
// import { NavLink, useRoutes } from "react-router-dom";
// const App = () => { // 使用路由表需要使用到hook函数 所以需要使用到函数式组件
//   const element = useRoutes(routes);
//   const activeStyle = ({ isActive }) => {
//     console.log(isActive);
//     return isActive ? "background" : "";
//   };
//   return (
//     <div className="all">
//       <div>
//         {/* <NavLink to="/home" className={activeStyle}> link标签无法添加样式 NavLink可以 
//           打开首页的页面
//         </NavLink>
//         <NavLink to="/about" className={activeStyle}>
//           打开关于的页面
//         </NavLink> */}
//       </div>
//       <div className="view">{element}</div>
//     </div>
//   );
// };
// export default App;
// import React from "react"; 嵌套路由 即主界面和子界面
import { Outlet, NavLink } from "react-router-dom";//Outlet是一个用于渲染子路由元素的组件。当父路由匹配时，它将渲染子路由中对应的组件。
class Home extends React.Component {
  render() {
    return (
      <div>
        首页的页面
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <NavLink to="classify" className="background">
            classify
          </NavLink>
          <NavLink to="navigation" className="background">
            navigation
          </NavLink>
        </div>
        <div style={{ background: "red" }}>
          {/* <Outlet /> 说明子路由需要渲染在这里*/}
        </div>
      </div>
    );
  }
}
export default Home;