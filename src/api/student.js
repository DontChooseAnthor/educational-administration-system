import request from "@/utils/request"

export default{
  //获取学生信息
  getInfo(){
  return request({
      url:'/student/info',
      method:'get' 
    })
  }
}