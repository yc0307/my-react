import React from 'react'
// 3引入store
import store from '../../store'


class Hot extends React.Component {
    constructor() {
        super()
        this.state = {
            user: "",
            arr:store.getState().arr
        }
        
    }
    componentDidMount(){
        store.subscribe(()=>{
            console.log("订阅")
            this.setState({
                arr:store.getState().arr
            })
        })
    }
    fn(e) {
        this.setState({
            user: e.target.value
        })
    }
    adduser() { 
        //  1:创建一个action  动作
        const action={
            type:'USER_ADD',  //标识性属性
            data:this.state.user
        }
        // 2 触发store的dispatch方法
        store.dispatch(action)
    }
    
    render() {
        console.log(this.props,"hot")
        return (
            <div>
                用户名 :
                <input type="text" value={this.state.user} onChange={(e) => { this.fn(e) }} />
                <button onClick={() => { this.adduser() }}>添加</button>
                <hr />
                <ul>
                   {
                       this.state.arr.map((item,index)=>{
                       return (<li key={index}>{item.username}</li>)
                       })
                   }
                </ul>

            </div>
        )
    }
    componentWillUnmount(){
        // 清除state
        this.setState=()=>{
            return
        }
    }
}
export default Hot;