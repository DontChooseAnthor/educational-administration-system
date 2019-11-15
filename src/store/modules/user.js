import { getToken, setToken, setUser, getUser, removeToken } from '@/utils/auth'
import { login, getUserInfo, logout } from '@/api/login'

const user = {
  state: {
    token: getToken(), //从localStorage中获取token
    user: getUser(),
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    SET_USER(state, user) {
      state.user = user
      setUser(user)
    }
  },
  actions: {
    // form 提交载荷
    Login({ commit }, form) {
      // 创建Promise对象异步处理登录，在resolve触发成功后处理
      return new Promise((resolve, reject) => {
        //在api中查找具体传参
        //trim()忽视空字符串格
        login(form.username.trim(), form.password).then(response => {
          const resp = response.data
          //获取响应的data数据
          commit('SET_TOKEN', resp.data.token)
          commit('SET_USER',resp.data.user)
          // 通过组件已经更新token成功
          resolve(resp)
        }).catch(error => {
          reject(error)
        })

      })
    },
    // 通过token获取用户信息
    GetUserInfo({commit,state}){
      return new Promise((resolve,reject)=>{
        getUserInfo(state.token).then(response => {
          const respUser = response.data
          commit('SET_USER',respUser.data)
          resolve(respUser)
        })
        .catch(error => {
          reject(error)
        })
      })
      
    },
    // 退出
    Logout({commit,state}){
      return new Promise((resolve,reject) => {
        logout(state.token).then(response => {
          const resp = response.data
          // 清空state中的数据，再清空local storage
          commit('SET_TOKEN','')
          commit('SET_USER','')
          removeToken()

          resolve(resp)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user