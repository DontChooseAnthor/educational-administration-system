//权限校验 router beforeEach
//退出登录后无法再访问登录后的页面

//to:即将要进入的目标路由对象
//from:即将要离开的路由对象
//next:是一个方法，指定路由地址，进行路由跳转
import router from './router'
import store from './store'
router.beforeEach((to, from, next) => {
  //判断token并获取,获取不到则禁止跳转到非登录页
  const token = store.state.user.token
  if (!token) {
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      //请求login则去login路由
      next()
    }
  } else {
    //如果获取到token值后访问login页面直接跳转到home
    if (to.path === '/login') {
      next()
    } else {
      //在本地查看是否有用户信息
      // const user = localStorage.getItem('local-user')
      const userInfo = store.state.user.user
      if (userInfo) {
        //本地获取到，直接去目标路由
        next()
      } else {
        store.dispatch('GetUserInfo').then(response => {
          if (response.flag) {
            // 获取用户信息成功，继续访问
            next()
          } else {
            next({ path: '/login' })
          }
        }).catch(error => {
         console.log(error)
        })
      }
    }
    //如果无法通过获取的token获取用户页面，则回到登陆页面，重新登录
  }
})
