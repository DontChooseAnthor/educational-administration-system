import request from '@/utils/request'

export default {
  // 校验密码,userID,password旧密码
  checkPwd(userId,password){
    return request({
      url:'/user/pwd',
      methods:'post',
      data:{
        userId,
        password
      }
    })
  },

  //修改密码userId,用户ID,password新密码
  updatedPwd(userId,password) {
    return request({
      url:'/user/pwd',
      methods:'put',
      data:{
        userId,
        password
      }
    })
  },
}