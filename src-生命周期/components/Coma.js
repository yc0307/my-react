import React from 'react'

class Coma extends React.Component{
    // 挂载期
    constructor(){
        super()
        this.state={
            num:10
        }
        console.log("constructor")
    }
    changeN(){
        this.setState({
            num:58
        })
    }

    componentWillMount(){
        console.log("组件将要挂载----componentWillMount")
    }
    render(){
        // this.setState({
        //     num:100
        // })
        // 切记  不能再这里执行setState   会进入死循环
        console.log("组件被渲染-----render")
        return (<div>
            {this.props.title}------state数据:---{this.state.num}---
            <button onClick={this.changeN.bind(this)}>更新state</button>
            Coma
        </div>)
    }
    componentDidMount(){
        console.log("组件挂载完成-----componentDidMount")
    }
    // 更新期
    componentWillReceiveProps(newprops){   //只有props的值改变才执行
        // [参数接收的是新props]
        console.log("componentWillReceiveProps",newprops)
        // 可以获取旧的props吗？
        console.log("componentWillReceiveProps",this.props)  //旧的props
    }
    shouldComponentUpdate(newprops,newstate){
        // 性能优化的钩子函数  必须return
        // 是否需要重新渲染页面

        console.log("shouldComponentUpdate",newprops,newstate)
        console.log("shouldComponentUpdate",this.state)   //旧的state的值
        return true
    }
    componentWillUpdate(newprops,newstate){   //组件将要被更新
        // this.setState({
        //     num:45
        // })
        console.log("componentWillUpdate",newprops,newstate)
    }
    // render
    componentDidUpdate(oldprops,oldstate){    //更新完成
        // this.setState({
        //     num:45
        // })
        // 切记  不能再这里执行setState   会进入死循环
        console.log("componentDidUpdate",oldprops,oldstate)
    }
    // 销毁期
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}

export default Coma