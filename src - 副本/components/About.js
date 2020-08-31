import React from 'react'


class About extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props,"constructor");   //
        // 在组件的构造函数里面如果想使用props里面的数据，需要
        // 给构造函数传递props并且给super也传递props
        this.state={
            num:"58"
        }
    }
    fn(){
        // 修改state状态机的时候，也可以获取到props的值
        this.setState((state,props)=>{
            console.log(state,"state")
            console.log(props,"props")
            return {
                num:state.num+props.msg
            }
        })
    }
    render(){
        // props不允许被修改   单向数据流
        console.log(this.props,"about")
        return (
            <div>
                {this.state.num}
                <button onClick={this.fn.bind(this)}>修改state</button>
            </div>
        )
    }
}
export default About;