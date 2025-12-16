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
class App extends React.Component<Aprops>{

  render() {
    return (
      <>
      <h1>{this.props.text}类组件</h1>
      </>
    )
    
  }
}
export default App
