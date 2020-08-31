import React from 'react'
import store from '../../store'

class  Search extends React.Component{
    constructor(){
        super()
        this.state={
          name:""
        }
       
    }
    fn(e){
        this.setState({
            name:e.target.value
        })
    }
    fn1(e){
        if(e.keyCode===13){
            this.$axios.get(this.$api.search+'?keywords='+this.state.name)
            .then(res=>{
                console.log(res)
            })
        }

    }
    
    render(){
        return (
          <div>
              <input value={this.state.name} onKeyUp={this.fn1.bind(this)} onChange={this.fn.bind(this)} type="text"/>
          </div>

        )
    }  
   
}
export default Search;