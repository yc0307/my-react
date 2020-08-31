import React,{Component} from 'react'
class Mystate2 extends Component{
    constructor(){
        super();
        this.state={
            username:"张三",
            pass:"",
            sex:"女",
            des:"描述",
            hobby:['吃'],
            city:"北京"
        }
    }
    changeUsername(e){
        let nVal=e.target.value;
        this.setState({
            username:nVal
        })
    }
    changePass(e){
        let nVal=e.target.value;
        this.setState({
            pass:nVal
        })
    }
    changeFields(attr,e){
        let nVal=e.target.value;
        this.setState({
            [attr]:nVal
        })
    }
    checkboxChange(e){
        let nVal=e.target.value;
        let index=this.state.hobby.indexOf(nVal);
        if(index==-1){
            this.state.hobby.push(nVal)
        }else{
            this.state.hobby.splice(index,1)
        }
        this.setState({
            hobby:this.state.hobby
        })
    }
    selectChange(e){
        this.setState({
            city:e.target.selectedOption[0].value
        })
    }
    render(){
        return(
            <div>
            <p>
                用户名：<input type="text" value={this.state.username} onChange={this.changeFields.bind(this,'username')}/>
            </p>
            <p>
                密码：<input type="password" value={this.state.pass} onChange={this.changeFields.bind(this,"pass")}/>
            </p>
            <p>
                性别：
                <input type="radio" value="男" onChange={this.changeFields.bind(this,"sex")} cecked={this.state.sex="男"}/>男
            </p>
            </div>
        )
    }
}
export default Mystate2