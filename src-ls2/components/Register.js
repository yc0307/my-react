import React from 'react'

class  Register extends React.Component{
    constructor(){
        super();
        this.state={
            user:"",
            password:""
        }
    }
    changeFields(attr,e){  //数据绑定
        let nVal=e.target.value;
        this.setState({
          [attr]:nVal   
        })
      }
    register(){ //注册

    }
    render(){
        return (
            <div>
                <p>
                    用户名:<input type="text"  value={this.state.user} onChange={this.changeFields.bind(this,'user')} />
                </p>
                <p>
                    密码:<input type="password" value={this.state.password} onChange={this.changeFields.bind(this,'password')}/>
                </p>
                <p>
                    <button onClick={this.register.bind(this)}>注册</button>
                </p>
            </div>
          )
      }  
}
export default Register;