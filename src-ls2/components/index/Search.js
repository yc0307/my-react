import React from 'react'
import store from '../../store'

class  Search extends React.Component{
    constructor(){
        super()
        this.state={
            userarr:store.getState().arr
        }
        store.subscribe(()=>{
            console.log("订阅123")
            this.setState({
                userarr:store.getState().arr
            })
        })
    }
    componentDidMount(){
        
    }
    del(ind){
    //   1创建action
       const action={
           type:"USER_DEL",
           data:ind
       }
       store.dispatch(action)
    }
    render(){
        return (
          <div>
              <ul>
                  {
                      this.state.userarr.map((item,index)=>{
                      return (<li key={index}>{item.username}
                        <button onClick={this.del.bind(this,index)}>删除</button>
                      </li>)
                      })
                  }
              </ul>
          </div>
        )
    }  
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }
}
export default Search;