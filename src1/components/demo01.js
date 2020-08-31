class demo01 extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props,"constructor");   //
        // 在组件的构造函数里面如果想使用props里面的数据，需要
        // 给构造函数传递props并且给super也传递props
    }
    render(){
        // props不允许被修改   单向数据流
        console.log(this.props,"about")
        return (
            <div>
               
            </div>
        )
    }
}
export default demo01