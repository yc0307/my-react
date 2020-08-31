import React,{Component} from 'react'

class Mystate extends Component{
       constructor(){
         super();   
         this.state={
           num:5,
           arr:["香蕉","句子","苹果"]
         }
       }
       fn(){
         console.log("fn",this);  //undefined
         console.log(this.state.num)
       }
       fn1(){
         console.log('fn1',this)
         console.log(this.state.num)
       }
       del(ind){//删除
          console.log(ind,"ind")
       }
        render(){ 
          return (
              <div>
                 <button onClick={this.fn.bind(this)}>es5事件绑定</button>
                 <button onClick={()=>{this.fn1()}}>es6事件绑定</button>
                 <ul>
                    {this.state.arr.map((item,index)=>{
                      return (<li key={index}>
                        {item}
                        --<button onClick={this.del.bind(this,index)}>删除1</button>
                        --<button onClick={()=>{this.del(index)}}>删除2</button>
                      </li>)
                    })}
                 </ul>
              </div>
          )
        }
    }
    export default Mystate

  
  