// http://nodejs.cn/api/events.html
// events是node中事件触发器模块
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

export default myEmitter
