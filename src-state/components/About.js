import React from 'react'


class About extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[
                {id:1,title:"香蕉"},
                {id:2,title:"apple"},
                {id:3,title:"orange"},
                {id:4,title:"pingg"}
            ],
            num:25
        }
    }
    add(){
        // {id:5,title:"梨"}
        // this.state.arr.push({id:5,title:"梨"})
        // this.setState({
        //     arr:this.state.arr
        // })
        // 如果我们要修改的值是在原来的基础上变化，建议使用setState里面传入回调函数
          
        // this.setState(state=>{  //state表示原来的状态数据
        // //    console.log(state,"state")
        //   state.arr.push({id:5,title:"梨"})
        //   return {
        //       arr:state.arr
        //   }
        // })
    //    简写
        this.setState(state=>({
                arr:state.arr.concat([{id:5,title:"梨"}])
        }))

        



    }
    render(){
        return (
            <div>
                <button onClick={this.add.bind(this)}>添加一条数据</button>
               <ul>
                   {
                       this.state.arr.map(item=>{
                           return (
                           <li key={item.id}>{item.title}</li>
                           )
                       })
                   }
               </ul>
            </div>
        )
    }
}
export default About;