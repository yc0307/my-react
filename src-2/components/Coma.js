import React from 'react'

class Coma extends React.Component{
    constructor(){
        super()
        console.log("3--子constructor")
        this.state={
            p:1
        }
    }
    componentDidMount(){
        console.log("5--子componentDidMount")
        // this.setState({
        //     p:this.state.p+this.props.c
        // })

         this.setState((state,props)=>{
             //等待
            //子组件再次  渲染之前执行
             console.log(state,"state")
             console.log(props,"props")
             return {
                 p:state.p+props.c
             }
         })

    }
    render(){
        console.log("4--子render")
        return (<div>
            {this.state.p}
        </div>)
    }
  
}

export default Coma