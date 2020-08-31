import React,{Component} from 'react'

class Mystate extends Component{
   
       constructor(){
         super();   
         this.state={
           message:"我是成都人"
         }
       }
      
        render(){ 
          // 3:接收传递过来的函数
          console.log(this.props,"事件函数");
          // 不能直接调用
          // this.props.fn("1456")
          return (
              <div>
                 Mystate
                 {/* 无法传参，但是可以调用父组件里的事件函数 */}
                 {/* <button onClick={this.props.fn}>点击</button> */}
                 <hr/>
                 {/* 可以传参 */}
                 <button onClick={()=>{this.props.fn(this.state.message)}}>点击</button>
              </div>
          )
        }
    }
    export default Mystate

  