import React,{Component} from 'react'

class Mystate extends Component{
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
        //  console.log(nVal)
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
          [attr]:nVal   //表达式作为对象的属性  要加[]   对象的属性是字符串类型
        })
      }

      checkboxChange(e){
          //判断value值在数组中 有就删除  没有就添加
          let nVal=e.target.value;
          console.log(1)
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
        // console.log(e.target.value)
        // this.setState({
        //   city:e.target.value
        // })
        // selectedOptions表示选中的下拉框  是一个数组
        console.log(e.target.selectedOptions[0].value)
        this.setState({
            city:e.target.selectedOptions[0].value
          })
      }

        render(){ 
          return (
              <div>
                {/* 
                  1：在state中定义一个变量并设置默认值
                  2：给文本框的value属性设置 state中定义的变量
                  3：给文本框添加onChange事件---对应一个函数(文本框内容改变执行函数)
                  4：函数中  获取文本框改变的内容---重新设置state中变量的值
                
                */}
                <p>
                  用户名:<input type="text" value={this.state.username} onChange={this.changeFields.bind(this,'username')} />
                  {this.state.username}
                </p>
                <p>
                  密码：<input type="password" value={this.state.pass} onChange={this.changeFields.bind(this,'pass')} />
                  {this.state.pass}
                </p>

                <p>
                  性别:
                  <input type="radio" value="男" onChange={this.changeFields.bind(this,"sex")}  checked={this.state.sex=="男"}/>男
                  <input type="radio" value="女"  onChange={this.changeFields.bind(this,"sex")}   checked={this.state.sex=="女"}/>女
                -----{this.state.sex}
                {/* 
                  checked 属性  值为true
                  onChange事件---获取到value值，更改state中sex的值
                */}
                </p>
                <p>
                 留言:
                 <textarea value={this.state.des} onChange={this.changeFields.bind(this,'des')}></textarea>
                  {this.state.des}
                </p>
          

                <p>
                  爱好：
                  <input type="checkbox" value="吃" onChange={this.checkboxChange.bind(this)} checked={this.state.hobby.includes('吃')} />吃
                  <input type="checkbox" value="喝" onChange={this.checkboxChange.bind(this)}  checked={this.state.hobby.includes('喝')} />喝
                  <input type="checkbox" value="玩" onChange={this.checkboxChange.bind(this)}  checked={this.state.hobby.includes('玩')} />玩
                  <input type="checkbox" value="乐" onChange={this.checkboxChange.bind(this)} checked={this.state.hobby.includes('乐')} />乐
                  {/* 
                    checked  判断数据在数组中是否存在   存在返回true
                    onChange事件   有就删除  没有就添加
                  
                  */}
               
                </p>
                <ul>
                  {
                    this.state.hobby.map((item,index)=>{
                    return (<li key={index}> {item}</li>)
                    })
                  }
                </ul>


               <p>
                 城市：
                 <select value={this.state.city}  onChange={this.selectChange.bind(this)}>
                    <option value="上海">上海</option>
                    <option value="北京">北京</option>
                    <option value="四川">四川</option>
                 </select>
               </p>



              </div>
          )
        }
    }
    export default Mystate

  
  