import React from 'react'
// import './App.css'
// 引入组件
import {BrowserRouter,HashRouter,Route,Switch,Link,NavLink} from 'react-router-dom'


import Coma from './components/Coma'
import Index from './components/Index'
class  App extends React.Component{
   
    render(){
        return (
            // 所有的路由操作都写在BrowserRouter中
            <BrowserRouter>

              {/* <Link to="/">首页</Link>
              <Link to="/coma">coma</Link> */}

              <NavLink exact to="/" activeClassName="aa">首页</NavLink>
              <NavLink to="/coma">coma</NavLink>
              {/* Route组件就是映射关系对象
                设置映射的路由组 件  path指定地址component指定要渲染的组件 exact精确匹配

                Switch指定路由匹配到一个就不再向下匹配
              */}
               <Switch>
                <Route path="/" exact component={Index}></Route>
                <Route path="/coma" component={Coma}></Route>
               </Switch>
            </BrowserRouter>
        )
    }  
}
export default App;