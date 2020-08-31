import React,{Component} from 'react'


class Child extends Component{
   constructor(){
       super()
       this.state={
           num:1
       }
   }
   add(){
/**
 *  在setState之后去使用某个state中的数据，用的是之前的值，我们需要使用变化之后的值
 *  在setState的第二个参数回调函数里面去执行操作
 * 
 * 
 */
       let newNum=Math.ceil(Math.random()*100)
       this.setState({
           num:newNum
       },()=>{  //异步执行完执行这里的回调
        console.log(this.state.num,2)
       })
       console.log(this.state.num,1)   //获取的是旧值
    //    因为setState是一个异步操作
   }


    render(){
      return (
          <div>
              <h2>{this.state.num}</h2>
              <button onClick={this.add.bind(this)}>修改值</button>
          </div>
      )
    }
}
export default Child