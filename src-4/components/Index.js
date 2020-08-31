import React from 'react'
import './index.css'
import { Switch,Route} from 'react-router-dom'

import Myhead from './pages/Myhead'

import Mytj from './index/Mytj'
import Hot from './index/Hot'
import Search from './index/Search'

class  Index extends React.Component{
   
    render(){
        return (
          <div>
             <Myhead></Myhead>
              <main>
                <Switch>
                    <Route path="/index/tj" component={Mytj}></Route>
                    <Route path="/index/hot" component={Hot}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    
                </Switch>
              </main>
          </div>
        )
    }  
}
export default Index;