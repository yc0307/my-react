import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import $axios from './http'
import $api from './http/api'
import bus from './bus'
Component.prototype.$bus=bus;
Component.prototype.$axios=$axios
Component.prototype.$api=$api

ReactDOM.render((
    <App/>
),document.getElementById('root'))