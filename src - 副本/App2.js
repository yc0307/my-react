import React from 'react'
import About from './components/About'
import Child from './components/Child'
import Mystate from './components/Mystate'

class  App extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"成都it",
            childmsg:""
        }
    }
//  1:在父组件定义函数
    parentfn(val){
       console.log("parentfn123",this)
       console.log("val",val)
    //    接收到子组件传递过来的值  val
       this.setState({
        childmsg:val
       })
    }

    render(){
        
        return (
            <div>
               <About msg={this.state.msg} num="45"></About>
               <hr/>
               <Child msg="hello"></Child>
               <hr/>
               {/* 
            2:将父的事件函数parentfn通过props传递给子组件   
               */}

               {this.state.childmsg}---
               <Mystate fn={this.parentfn.bind(this)}></Mystate>
               {/* 
               在传递的时候，父组件的事件函数名一定要把this绑定好(父组件)，否则this指向其他的
               */}
            </div>
        )
    } 
   
}
export default App;