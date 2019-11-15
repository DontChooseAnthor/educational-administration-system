<template>
  <div>
    <!-- 数据表单 -->
    <el-table :data="info" border style="width: 100%">
      <el-table-column prop="studentNum" label="学号" v-model="studentNum"></el-table-column>
      <el-table-column prop="name" label="姓名" v-model="name"></el-table-column>
      <el-table-column prop="sex" label="性别" v-model="sex"></el-table-column>
      <el-table-column prop="birthday" label="出生日期" v-model="birthday"></el-table-column>
    </el-table>
    <el-table :data="info" border style="width: 100%">
      <el-table-column prop="phone" label="手机号码" v-model="phone"></el-table-column>
      <el-table-column prop="email" label="邮箱" v-model="email"></el-table-column>
      <el-table-column prop="address" label="家庭住址" v-model="address"></el-table-column>
      <el-table-column prop="pro" label="专业" width="100" v-model="pro"></el-table-column>
      <el-table-column prop="classNum" label="班级" width="80" v-model="classNum"></el-table-column>
    </el-table>
    <el-dropdown @command="handleCommand" trigger="click">
      <el-button type="primary">
        修改信息
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">学号</el-dropdown-item>
        <el-dropdown-item command="b" divided>姓名</el-dropdown-item>
        <el-dropdown-item command="c" divided>性别</el-dropdown-item>
        <el-dropdown-item command="d" divided>出生日期</el-dropdown-item>
        <el-dropdown-item command="e" divided>手机号码</el-dropdown-item>
        <el-dropdown-item command="f" divided>邮箱</el-dropdown-item>
        <el-dropdown-item command="g" divided>家庭住址</el-dropdown-item>
        <el-dropdown-item command="h" divided>专业</el-dropdown-item>
        <el-dropdown-item command="i" divided>班级</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import studentApi from "@/api/student.js";
export default {
  name: "student",
  data() {
    return {
      name: "",
      sex: "",
      birthday: "",
      studentNum: "",
      email: "",
      classNum: "",
      address: "",
      pro: "",
      phone: "",
      info: [],
      radio: "1"
    };
  },
  created() {
    //初始化获取学生信息
    this.fetchData();
  },
  methods: {
    fetchData() {
      studentApi.getInfo().then(response => {
        this.info = response.data.data;
        console.log(this.info[0].studentNum);
      });
    },
    handleCommand(command) {
      switch (command) {
        case "a":
          let studentNumChange = this.info[0].studentNum;
          this.$prompt("请输入学号", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /^1[0-9]\d{7}$/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            studentNumChange = value;
            this.info[0].studentNum = studentNumChange.value;
          });
          break;

        case "b":
          let nameChange = this.info[0].name;
          this.$prompt("请输入姓名", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /[\u4e00-\u9fa5]/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            nameChange = value;
            this.info[0].name = nameChange.value;
          });
          break;

        case "c":
          let sexChange = this.info[0].sex;
          this.$prompt("请输入性别", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /^[男|女]$/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            sexChange = value;
            this.info[0].sex = sexChange.value;
          });
          break;

        case "d":
          let birthdayChange = this.info[0].birthday;
          this.$prompt("请输入生日", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            birthdayChange = value;
            this.info[0].birthday = birthdayChange.value;
          });
          break;

        case "e":
          let phoneChange = this.info[0].phone;
          this.$prompt("请输入手机号码", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /^1[3456789]\d{9}$/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            phoneChange = value;
            this.info[0].phone = phoneChange.value;
          });
          break;

        case "f":
          let emailChange = this.info[0].email;
          this.$prompt("请输入邮箱", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            emailChange = value;
            this.info[0].email = emailChange.value;
          });
          break;

        case "g":
          let addressChange = this.info[0].address;
          this.$prompt("请输入邮箱", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /[a-zA-Z0-9_\u4e00-\u9fa5]/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            addressChange = value;
            this.info[0].address = addressChange.value;
          });
          break;

        case "h":
          let proChange = this.info[0].pro;
          this.$prompt("请输入专业名称", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /[\u4e00-\u9fa5]/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            proChange = value;
            this.info[0].pro = proChange.value;
          });
          break;

        case "i":
          let classNumChange = this.info[0].classNum;
          this.$prompt("请输入班级序号", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPattern: /[\u4e00-\u9fa5]/,
            inputErrorMessage: "格式不正确"
          }).then(value => {
            classNumChange = value;
            this.info[0].classNum = classNumChange.value;
          });
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
.el-dropdown {
  position: absolute;
  margin-top: 20px;
  right: 40px;
}
</style>