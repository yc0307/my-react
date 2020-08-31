import React from 'react'
import Coma from './components/Coma'


class  App extends React.Component{
    constructor(){
        super()
        console.log("1--父constructor")
        this.state={
           c:10
        }
    }
    // 先执行子组件的componentDidMount 再执行父组件的componentDidMount
    componentDidMount(){
        console.log("6--父componentDidMount")
        this.setState({
          c:30
        })
    }
    render(){
        console.log("2--父render")
        return (
            <div>
               <Coma c={this.state.c}></Coma>
           </div>
        )
    }  
}
export default App;