import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import bus from './bus'
Component.prototype.$bus=bus;


ReactDOM.render((
    <App/>
),document.getElementById('root'))