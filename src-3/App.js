import React from 'react'
// import './App.css'
// 引入组件
import {BrowserRouter,HashRouter,Route,Switch,Link,NavLink} from 'react-router-dom'

import './App.css'
import Login from './Login'
import Register from './Register'
import Index1 from './Index1'
class  App extends React.Component{
   
    render(){
        return (
          <div>
        
            
            <BrowserRouter>

             
               <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/" component={Index1}></Route>
               </Switch>
            </BrowserRouter>
          </div>





           
        )
    }  
}
export default App;