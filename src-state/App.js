import React from 'react'
import About from './components/About'
import Child from './components/Child'
// import Mystate from './components/Mystate'
import My from './components/My'

class  App extends React.Component{
    

    render(){
        
        return (
            <div>
               <About></About>
               <hr/>
               <Child></Child>
               <hr/>
               <My></My>
            </div>
        )
    } 
   
}
export default App;