// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './APP'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false
 //引入公共样式
import './assets/css/reset.css'
import './assets/js/scale.js'

import $axios from './http'
Vue.prototype.$axios=$axios

var eventbus = new Vue;
Vue.prototype.$bus=eventbus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
