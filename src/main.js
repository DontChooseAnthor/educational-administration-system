import Vue from 'vue'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import App from './App.vue'
import router from './router'
import store from './store'

//引入全局权限
import './permission'

//动态根据生产环境/开发环境改变
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
