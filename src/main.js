import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/vant.js'
import { getToken } from './auth'

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    if(!getToken()){
      router.push({path:'/login'})
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
