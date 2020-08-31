import {EventEmitter} from 'events'
// const store={
//     arr:[{username:"lisi"}],
//     num:0,
//     add(data){
//         this.arr.push(data)
//         console.log(this.arr,"arr")
//     }
// }

// Object.assign将对象进行合并
const store=Object.assign({},EventEmitter.prototype,{
    arr:[{username:"lisi"}],
    num:0,
    add(data){
        this.arr.push(data)
        console.log(this.arr,"arr")
    },
    updatearr(callback){
        // 自定义事件
        this.on('changearr',callback)
    }
})

export default store;