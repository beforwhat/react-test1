//编程式路由跳转设计一个函数自动跳转
// import React from "react"; 嵌套路由 即主界面和子界面
// import { Outlet, NavLink ，useNavigate} from "react-router-dom";//Outlet是一个用于渲染子路由元素的组件。当父路由匹配时，它将渲染子路由中对应的组件。
// class Home extends React.Component {
// state = {name='test',website='test.com'}
// const navigate = useNavigate()
//const toClassify = () =>{
// navigate("classify",{state})}
//   render() {
//     return (
//       <div>
//         首页的页面
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "20px",
//           }}
//         >采用字符串形式传入路径 这里使用动态参数形式 模板字符串
//           <button onClick={toClassify}>classify</button>
//           <NavLink to="navigation" className="background">
//             navigation
//           </NavLink>
//         </div>
//         <div style={{ background: "red" }}>
//           {/* <Outlet /> 说明子路由需要渲染在这里*/}
//         </div>
//       </div>
//     );
//   }
// }
// export default Home;