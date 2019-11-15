import request from '@/utils/request'

export default {
  getList(){
    return request({
      url:'/classes/list',
      method:'get'
    })
  },

  search(page,size,searchMap){
    return request({
      url:`/classes/list/search/${page}/${size}`,
      method:'post',
      data:searchMap
    })
  }
}