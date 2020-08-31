import React from 'react'
import './App.css'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';

import Index from "./components/Index";
import Login from "./components/Login";
import Register from "./components/Register";
class  App extends React.Component{
   
    render(){
        return (
          <BrowserRouter>
             <Switch>
                 <Route path="/login" component={Login}></Route>
                 <Route path="/register" component={Register}></Route>
                 <Route path="/index"  component={Index}></Route>
                 <Route path="*">
                      <Redirect to="/index"></Redirect>
                </Route>
             </Switch>
          </BrowserRouter>
        )
    }  
}
export default App;