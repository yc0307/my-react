import React from 'react'

class Coma extends React.Component{
    fn(){
        this.$bus.emit('abc',"成都你好")
    }
    render(){
        return (<div>
            Coma.js
            <button onClick={this.fn.bind(this)}>传值</button>
        </div>)
    }
}

export default Coma