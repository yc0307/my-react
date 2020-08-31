import React from 'react'
import Coma from './components/Coma'


class  App extends React.Component{
    constructor(){
        super()
        this.state={
            isShow:false,
            title:"乐山大佛洗脚了"
        }
    }
    up_click(){
        this.setState({
            isShow:true
        })
    }
    un_click(){
        this.setState({
            isShow:false
        })
    }
    changetitle(){
        this.setState({
            title:"峨眉山也洗脚了"
        })
    }
    render(){
        
        return (
            <div>
             <button onClick={this.up_click.bind(this)}>创建组件</button>
             <button onClick={this.un_click.bind(this)}>卸载组件</button>
             <button onClick={this.changetitle.bind(this)}>修改title</button>
             <hr/>
             {
                 this.state.isShow?<Coma title={this.state.title}></Coma>:""
             }
            </div>
        )
    } 
   
}
export default App;