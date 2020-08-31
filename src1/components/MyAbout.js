import React,{Component} from 'react'

class MyAbout extends React.Component{
    constructor(){
        super();
    }
    fn(e){
        console.log(e.target.value,"fn");
        
    }
    fn1(e){
        console.log(e.target.value,"fn1");
        
    }
    render(){
        return(
            <div>
                <input type="text" onBlur={this.fn.bind(this)}></input>
                <hr></hr>
                <input type="text" onBlur={(e)=>{this.fn1(e)}}></input>
            </div>
        )
    }
}
export default MyAbout;