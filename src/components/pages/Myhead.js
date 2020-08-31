import React from 'react'
import { Link,withRouter } from 'react-router-dom'



class  Myhead extends React.Component{
   fn(){
       this.props.history.push('/login')
   }
    render(){
        return (
            <header>
                <button onClick={this.fn.bind(this)}>跳转</button>
            <ul>
                <li>
                    <Link to="/tj">推荐</Link>
                </li>
                <li>
                    <Link to="/hot">热歌榜</Link>
                </li>
                <li>
                <Link to="/search">搜索</Link>
                </li>
            </ul>
          </header>
        )
    }  
}
export default withRouter(Myhead);