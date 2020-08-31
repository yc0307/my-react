import React from 'react'


class About extends React.Component{
    constructor(){
        super();
       
    }
    fn(e){
        console.log(e.target.value,"fn")
    }
    fn1(e){
        console.log(e.target.value,"fn1")
    }
    render(){
        return (
            <div>
               <input type="text" onBlur={this.fn.bind(this)} />

               <hr/>
               <input type="text" onBlur={(e)=>{this.fn1(e)}} />
               {/* 
               标签点击之后其实执行的是外层的箭头函数，箭头函数里面调用了对应的事件函数 
               外层的箭头函数才是标签真正的事件函数
               所以事件对象其实是在箭头函数的形参位置
               */}

            </div>
        )
    }
}
export default About;