import React from 'react'
// import About from './components/About'
import Child from './components/Child'
// import Mystate from './components/Mystate'
import My from './components/My'
import MyAbout from './components/MyAbout'
import Mystate1 from './components/Mystate1'
import demo01 from './components/demo01'

class  App extends React.Component{
    

    render(){
        
        return (
            <div>
               {/* <About></About> */}
               <MyAbout></MyAbout>
               <hr/>
               <Child></Child>
               <hr/>
               {/* <Mystate></Mystate> */}
               <My></My>
               <Mystate1></Mystate1>
               <demo01></demo01>
            </div>
        )
    } 
   
}
export default App;