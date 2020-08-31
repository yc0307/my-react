import React,{Component} from 'react'
class My extends Component{
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleTimeString,
            num:25
        }
    }
    changenum(){
        this.setState({
            num:this.state.num+5
        })
    }
    render(){
        const {num,time}=this.state
        return (
            <div>
                {this.state.num}-----{num}
                <button onClick={this.changenum.bind(this)}>修改num</button>
            </div>
        )
    }
}
export default My