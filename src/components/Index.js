import React from 'react'
import './index.css'
import { Switch,Route,Redirect} from 'react-router-dom'

import Myhead from './pages/Myhead'



class  Index extends React.Component{
   
    render(){
      
        return (
          <div>
             <Myhead></Myhead>
              <main>
                 <Switch>
                    {/* <Route path="/tj" component={Mytj}></Route>
                    <Route path="/hot" component={Hot}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Redirect path="*" to="/tj"></Redirect> */}
                    {
                      this.props.children.map((item,index)=>{
                          if(item.path==="*"){
                            return (<Redirect key={index} path={item.path} to={item.redirect}></Redirect>)
                          }else{
                            return (<Route key={index} path={item.path} component={item.component}></Route>)
                          }
                      })
                    }



                    
                </Switch>
              </main>
          </div>
        )
    }  
}
export default Index;