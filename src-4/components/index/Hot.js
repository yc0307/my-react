import React from 'react'
// 2引入actions
import actions from '../../store/actions'
import store from '../../store/store'

class Hot extends React.Component {
    constructor() {
        super()
        this.state = {
            user: "",
            userarr:store.arr
        }
    }
    fn(e) {
        this.setState({
            user: e.target.value
        })
    }
    adduser() { 
    //   1:触发动作，给actions发出信息(调用actions中的方法)
          actions.add(this.state.user)
    }
    componentDidMount(){   //组件刷新
        store.updatearr(()=>{
            this.setState({
                userarr:store.arr
            })
        })
    }
    render() {
      
        return (
            <div>
                用户名 :
                <input type="text" value={this.state.user} onChange={(e) => { this.fn(e) }} />
                <button onClick={() => { this.adduser() }}>添加</button>
                <hr />
                <ul>
                    {
                        this.state.userarr.map((item,index)=>{
                        return (<li key={index}>
                         {index+1}------   {item.username}
                            </li>)
                        })
                    }
                </ul>

            </div>
        )
    }
}
export default Hot;