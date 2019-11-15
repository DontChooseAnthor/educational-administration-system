//导入封装的自定义axios
import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username: username,
      password: password,
    }
  })
}

export function getUserInfo(token) {
  return request({
    url: `/user/info/${token}`,
    method: 'get',
    data:{
      token:token
    }
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    data: {
      token: token
    }
  })
}