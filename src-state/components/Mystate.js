import React,{Component} from 'react'

/*
 react中数据改变，视图上也跟着改变，数据要放在state中
 state类似于vue中的data，声明的变量只能在当前组件中使用
 一般在构造函数(constructor)中，使用this.state={} 来声明变量
 使用this.state.xx读取值
 使用this.setState()方法来修改值，并且视图上会检测到数据的变化

*/
class Mystate extends Component{
    //   实例化类的时候，constructor函数自动执行
       constructor(){
         super();   //继承父类的构造函数  初始化this
        //  console.log(this)
         this.state={  //1--声明变量
           time:new Date().toLocaleTimeString(),
           num:25
         }
       }
       changenum(){
        //    修改state中num的值
        // this.state.num += 5;
        // 上述这样无法修改，虽然state中数据变化 但是视图不更新
        // console.log(this.state.num,"num")
        // 要修改state中的数据，视图也要跟着改变

        // this.setState({
        //      num:60
        // })
        this.setState({
            num:this.state.num+5
       })
        //    setState会去修改state中的数据，修改完会调用render函数，重新渲染视图
       }
        render(){ 
          const {num,time}=this.state
          return (
              <div>
                  {/* 访问状态 */}
                  {this.state.num}---{num}
                  <button onClick={this.changenum.bind(this)}>修改num</button>
                  <hr/>
                  当前时间是:{this.state.time}---{time}
              </div>
          )
        }
    }
    export default Mystate

    // bind  call apply 使用及区别