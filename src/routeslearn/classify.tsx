// import React from "react"; 导入路由表
// import { useParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Classify = () => {
  // const params = useParams();//获取跳转路由时传入的参数 useParams() 接受父组件参数
  // const [search,setSearch] = useSearchParams()//
  // const xd = search.get('xd')
  // const website = search.get('website')
  const {state:{xd,website}} = useLocation()//useLocation是多层的所以解构赋值也要保证多层
  return (
    <div>
      分类
      <div>父组件home传递的参数:{xd}-{website}</div> 
    </div>
  );
};
export default Classify;
