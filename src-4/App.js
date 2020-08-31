import React from 'react'
import './App.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import router from './assets/js/router'


class  App extends React.Component{
    constructor(){
        super()
    }
    renderComponent(r){
        return <r.component />
        // 判断哪些路由需要登录
        // if(r.needlogin){
        // //    判断有没有登录信息
        //     if(localStorage.getItem('userinfo')){
        //         return <r.component/>
        //     }else{
        //         return <Redirect to="/login"/>
        //     }
        // }else{
        //     return <r.component />
        // }
        
    }
    render(){
        return (
          <BrowserRouter>
             <Switch>
               {
                   router.map((route,key)=>{
                       return  <Route key={key} path={route.path} render={this.renderComponent.bind(this,route)}></Route>
                    // return  <Route key={key} path={route.path} render={(props)=>{this.renderComponent(props,route)}}></Route>
                   })

               }
                    {/* 不能给render事件函数传递组件，而是需要把这个路由的所有信息给传递过去
                    
                    */}
                 {/* <Route path="/login" render={this.renderComponent.bind(this,<Login/>)}></Route>
                 <Route path="/register" render={this.renderComponent.bind(this,<Register/>)}></Route>
                 <Route path="/index"  render={this.renderComponent.bind(this,<Index/>)}></Route> */}
             </Switch>
          </BrowserRouter>
        )
    }  
}
export default App;