import React,{Component} from 'react'

function Child(props){
    // 函数式组件中使用props，要给该函数组件传递props
    console.log(props,"child")
    return (
        <div>

        </div>
    )
}
  
export default Child