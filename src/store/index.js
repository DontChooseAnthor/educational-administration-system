import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导入modules中的模块
import user from './modules/user'

export default new Vuex.Store({
  modules: {
    user
  }
})
