// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import UsersApi from './api/users.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

import Axios from 'axios'
Vue.$http = Axios

Axios.defaults.baseURL = 'https://pacific-ocean-95223.herokuapp.com/'
// Axios.defaults.baseURL = 'http://localhost:3000/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

Vue.config.productionTip = false
UsersApi.checkLoggedIn()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
