//封装axios
import axios from 'axios'
//引入loading,message组件
import {Loading,Message} from 'element-ui'


//设置打开关闭加载
const loading = {
  loadingInstance:null,//声明loading实例
  // 打开加载
  open: function(){
    if(this.loadingInstance === null){
      // 如果实例为空则创建
    this.loadingInstance = Loading.service({
      target:'.main',
      text:'加载中...',
      background:'rgba(0,0,0,0.5)'
  });
    }
  },
  //关闭加载
  close: function(){
    if(this.loadingInstance !== null){
      this.loadingInstance.close()
    }
    this.loadingInstance = null
  }
}

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

//axios拦截器设置
//请求拦截器
request.interceptors.request.use(config => {
  //打开加载窗口
  loading.open()
  return config
}, error => {
  //返回带有拒绝信息的promise对象
  return Promise.reject(error)
  //出现异常关闭加载
  loading.close()
})
//响应拦截器
request.interceptors.response.use(response => {
  //关闭加载
  loading.close()
  const resp = response.data

  // 后台正常响应的状态，如果不是2000，说明后台处理有问题
  if(resp.code !== 2000){
    // easymock失败返回信息
    Message({
      message:resp.message || '网络异常',
      type:'warning',
      duration: 5*1000
    })
  }
  return response
}, error => {
  //关闭加载
  loading.close()
  //网络错误提示信息
  Message({
    message:"网络连接失败",
    type:'error',
    duration: 5*1000
  })
  return Promise.reject(error)
})

//导出自定义创建的axios对象
export default request
