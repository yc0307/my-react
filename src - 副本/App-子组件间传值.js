import React from 'react'
import Coma from './components/Coma'
import Comb from './components/Comb'
import Comc from './components/Comc'

class  App extends React.Component{
    
    render(){
        
        return (
            <div>
             <Coma></Coma>
             <hr/>
             <Comb></Comb>
             <hr/>
             <Comc></Comc>
            </div>
        )
    } 
   
}
export default App;