import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import bus from './bus'
import $axios from './http'
import $api from './http/api'
Component.prototype.$axios=$axios
Component.prototype.$api=$api
Component.prototype.$bus=bus;


ReactDOM.render((
    <App/>
),document.getElementById('root'))