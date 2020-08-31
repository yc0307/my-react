import React from 'react'

class Comc extends React.Component{
    render(){
        console.log(456)
        this.$bus.emit('abc',"hello")
        return (<div>
            Comc.js
            
        </div>)
    }
}

export default Comc