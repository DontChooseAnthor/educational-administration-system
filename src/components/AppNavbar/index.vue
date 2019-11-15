<template>
  <div class="navbar">
      <!-- 默认选择菜单 -->
      <!-- :router = "true"开启路由 -->
      <el-menu
        :router = "true"
        default-active="/"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#E63F00"
        text-color="#fff"
        active-text-color="#FFFF66"
      >
        <el-menu-item index="/">
          <i class="el-icon-house"></i>
          <span slot="title">首页</span>
        </el-menu-item>
         <el-menu-item index="/student/">
          <i class="el-icon-user"></i>
          <span slot="title">学生信息</span>
        </el-menu-item>
         <el-menu-item index="/classes/">
          <i class="el-icon-receiving"></i>
          <span slot="title">课程管理</span>
        </el-menu-item>
         <el-menu-item index="/CET/">
          <i class="el-icon-thumb"></i>
          <span slot="title">四六级报名入口</span>
        </el-menu-item>
         <el-menu-item index="/other/">
          <i class="el-icon-coffee-cup"></i>
          <span slot="title">课外相关</span>
        </el-menu-item>
        
      </el-menu>
  </div>
</template>

<script>
export default {
  name: "appNavbar",
  data(){
    return{
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
  .el-menu{
    border-right: none;
  }
</style>