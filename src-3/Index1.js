import React from 'react'
  // import './index.css'
  import { Switch,Route,Link } from 'react-router-dom'
  
  import Mytj from './components/Mytj'
  import Hot from './components/Hot'
  import Search from './components/Search'
  import './Index1.css'
  class  Index1 extends React.Component{
     
      render(){
          return (
            <div>
                <header>
                  <ul>
                      <li>
                          <Link to="/tj">推荐</Link>
                      </li>
                      <li>
                          <Link to="/hot">热歌榜</Link>
                      </li>
                      <li>
                      <Link to="/search">搜索</Link>
                      </li>
                  </ul>
                </header>
                <main>
                  <Switch>
                      <Route path="/tj" component={Mytj}></Route>
                      <Route path="/hot" component={Hot}></Route>
                      <Route path="/search" component={Search}></Route>
                  </Switch>
                </main>
            </div>
          )
      }  
  }
  export default Index1