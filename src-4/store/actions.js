import dispatcher from './dispatcher'
export default {
    add(user){
        // 1-1创建action
        const action={
            type:'ADD',  //标识属性  告诉dispatch我要做什么操作
            data:user
        }
        // 1-2调用dispatcher 中的dispatch方法  传递action过去
        // console.log(dispatcher,"1111")
        dispatcher.dispatch(action)
    }
}