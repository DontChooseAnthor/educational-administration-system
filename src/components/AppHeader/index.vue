<template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="@/assets/hfuulogo.png" width="30px" height="30px" />
      <span class="company">合肥学院教务系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{user.name}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-back" command="b">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- 修改密码 -->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="原密码" prop="oldPass">
          <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="$refs['ruleForm'].resetFields()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// import { logout } from "@/api/login";
import passwordApi from '@/api/password'
export default {
  name: "appHeader",
  data() {
    //在return上声明校验器
    // 校验旧密码
    const validateOldPass = (rule,value,callback) => {
      passwordApi.checkPwd(this.user.id,value).then(response=>{
        const resp = response.data
        if(resp.flag){
          //验证通过
          callback()
        } else {
          callback(new Error(resp.message))
        }
      })
    }
    // 校验新密码和旧密码是否相同
    const validatePass = (rule,value,callback) => {
      if(value === ""){
        callback(new Error('请输入密码'))
      } else if(value == this.ruleForm.oldPass){
        callback(new Error('新密码和原密码相同'))
      } else {
        callback()
      }
    }
    // 校验再次输入密码是否相同
    const validatePass2 = (rule,value,callback) => {
      if(value === ""){
        callback(new Error('请输入密码'))
      } else if(value !== this.ruleForm.pass){
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
      }
    
    return {
      user: this.$store.state.user.user,
      dialogFormVisible: false,
      ruleForm: {
        oldPass:'',
        pass:'',
        checkPass:''
      },
      rules: {
        oldPass:[
          {required:true,message:'原密码不能为空',trigger:"blur"},
          { validator: validateOldPass, trigger: 'blur' }
        ],
        pass:[
          {required:true,message:'新密码不能为空',trigger:"blur"},
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass:[
          {required:true,message:'确认密码不能为空',trigger:"blur"},
          { validator: validatePass2, trigger: 'blur' }
        ]
    },
  }
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item:" + command);
      switch (command) {
        case "a":
          //修改密码
          this.handlePwd();
          break;

        case "b":
          //退出登录
          //获取本地token值
          this.handleLogout();
          break;
        default:
          break;
      }
    },
    // 退出登录方法
    handleLogout() {
      // const token = localStorage.getItem("local-token");
      // logout(token).then(response => {
      //   const resp = response.data;
      //   if (resp.flag) {
      //     //退出成功清除本地数据
      //     localStorage.removeItem("local-token");
      //     localStorage.removeItem("local-user");
      //     //回到登陆页面
      //     this.$router.push("/login");
      //   } else {
      //     this.$message({
      //       type: "warning",
      //       message: resp.message,
      //       duration: 500 
      //       //弹出停留时间
      //     });
      //   }
      // });
      
      // 使用vuex方法
      this.$store.dispatch('Logout').then(response=>{
        if(response.flag){
          console.log('responseflag',response.flag)
          this.$router.push('/login')
        } else {
          this.$message({
            message:resp.message,
            type:'warning',
            duration:500
          })
        }
      })
    
    },

    // 打开修改密码窗口
    handlePwd() {
      this.dialogFormVisible = true;
    },
    // 修改密码
    submitForm(formName){
      this.$refs[formName].validate(valid=>{
        if(valid){
          console.log('校验成功')
          passwordApi.updatedPwd(this.user.id,this.ruleForm.checkPass).then(response => {
            const resp = response.data
            this.$message({
              message:resp.message,
              type:resp.flag?'success':'warning'
            })
            if(resp.flag){
              this.handleLogout()
            }
          })
        } else {
          return false
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  line-height: 50px;
  //去除img默认3px底边距
  font-size: 0;
  .logo {
    vertical-align: middle;
    padding: 0 10px 0 40px;
  }
  .company {
    color: #444444;
    font-size: 20px;
    position: absolute;
  }
  .el-dropdown {
    font-size: 16px;
    width: 100px;
    float: right;
    margin-right: 15px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #444444;
  }
}
</style>

