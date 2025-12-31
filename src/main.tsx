import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import { BrowserRouter } from "react-router-dom"; //使用路由方式引入组件必须使用BrowserRouter 、HashRouter
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App text={"react"} />
  </StrictMode>,
)
