import React from 'react'

class Comb extends React.Component{
    constructor(){
        super();
        // 监听事件
        console.log(123)
        this.$bus.on('abc',function(str){
             console.log(str)
        })
    }
    render(){
        return (<div>
            Comb.js
        </div>)
    }
}

export default Comb