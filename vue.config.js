module.exports = {
  devServer:{
    port: 8888,
    https: false,
    host: "localhost",
    //配置开发环境代理
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_SERVICE_URL,
        changOrigin:true,
        pathRewrite:{
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  },
  productionSourceMap: false,
  lintOnSave:false
}