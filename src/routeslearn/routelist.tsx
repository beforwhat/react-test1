// import { Navigate } from "react-router-dom"; 要路由的组件
// import About from "../components/About";
// import Home from "../components/Home";

// export default [
//   {
//     path: "/home",
//     element: <Home />,
//        children: [
//   {
//     path: "classify",
//     element: <Classify />,
//   },
//   {
//     path: "navigation",
//     element: <Navigation />,
//   },
// ],
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/",  根路径 默认显示
//     element: <Navigate to="about" />,
//   },
// ];路由表 不再使用Link标签来指示跳转路径和组件
// export default [
//   {
//     path: "/home",
//     element: <Home />,
//        children: [
//   {                传递多个参数: 后接参数即可
//     path: "classify/:xd：xx:xxx", 使用useParam用来传递参数时 可以使用传入动态参数的方式（useParam相当于state）根据页面的动态参数来改变路由的路径但是渲染的仍然是这个组件只是路径会动态变化
//     element: <Classify />,
//   },
//   {
//     path: "navigation",
//     element: <Navigation />,
//   },
// ],
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// export default [
//   {
//     path: "/home",
//     element: <Home />,
//        children: [
//   {                
//     path: "classify", 使用state和search来传递参数时不需要别的参数
//     element: <Classify />,
//   },
//   {
//     path: "navigation",
//     element: <Navigation />,
//   },
// ],
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },