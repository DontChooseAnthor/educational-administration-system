<template>
  <div class="login-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="60px" class="login-form">
      <h2 class="login-title1">合肥学院教务平台</h2>
      <h3 class="login-title2">——厚德博学 善思致用</h3>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
    <h4>合肥学院教务平台 | 1995-2019</h4>
  </div>
</template>

<script>
//导入api接口
import { login, getUserInfo } from "@/api/login";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          //提交表单
          // login(this.form.username, this.form.password).then(response => {
          //   const resp = response.data;
          //   console.log('成功登录')
          //   console.log(resp,resp.flag)
          //   //验证成功后，用token获取用户信息
          //   if (resp.flag) {
          //      //调用接口成功时，axios返回的promise对象
          //     getUserInfo(resp.data.token).then(response => {
          //       //获取到用户的数据
          //       const respUser = response.data;
          //       if (respUser.flag) {
          //         //保存token及用户信息
          //         localStorage.setItem("local-user",JSON.stringify(respUser.data));
          //         console.log(resp.data)
          //         localStorage.setItem("local-token", resp.data.token);
          //         //前往首页
          //         this.$router.push({ path: "/" });h 
          //       } else {
          //         //获取失败
          //         this.$message({
          //           message:respUser.message,
          //           type:'warning'
          //         })
          //       }
          //     });
          //   } else {
          //     //验证失败
          //     this.$message({
          //       message:resp.message,
          //       type:"warning"
          //     });
          //   }
          // });

          // 使用vuex方式重构
         this.$store
            .dispatch("Login", this.form)
            .then(response => {
              //response是响应的真实对象
              if (response.flag) {
                this.$router.push("/");
              } else {
                this.$message({
                  message: response.message,
                  type: "warning"
                });
              }
            })
            .catch(error => {});
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 350px;
  // 上下间距
  margin: 190px auto;
  background: rgba(255, 255, 255, 0.8) no-repeat;
  padding: 30px;
  border-radius: 20px;
  .login-title1 {
    text-align: center;
    color: #303133;
    margin-top: -5px;
  }
  .login-title2 {
    font-family: "STXingkai", "KaiTi", "SimSun";
    color: burlywood;
    margin-left: 150px;
    font-size: 18px;
  }
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/hfuu.jpg");
  overflow: hidden;
  h4 {
    color: aliceblue;
    font-size: 16px;
    float: right;
    margin-right: 30px;
  }
}
</style>
