// 信息分发中心   派发器
// cnpm install flux --save
// 2-1引入
import {Dispatcher} from 'flux'
import store from './store'

//2-2 创建Dispatcher实例
const dispatcher=new Dispatcher()

// 2-3  使用dispatcher 注册方法
// actions调用dispatcher.dispatcher方法其实就是调用的下面注册的方法
dispatcher.register(action=>{
    // action就是从actions传递过来的信息
    // console.log(action,"action")
    //  根据action中的标识性属性做信息分发（判断） 我该出发store中的什么操作
      switch(action.type){
          case 'ADD':
            //   添加操作
            // 调用store中的add方法
            store.add({username:action.data})
            store.emit('changearr')
          break;
          case 'DEL':
            //   删除
          break;
      }



})

export default dispatcher;