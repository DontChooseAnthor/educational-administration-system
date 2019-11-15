<template>
  <div class="container">
    <div class="web-link">
      <span>外 部 友 情 连 接 :</span>
      <el-tooltip class="item" effect="dark" content="百度" placement="bottom-end">
        <el-button icon="el-icon-search" circle @click="btn02"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="爱奇艺" placement="bottom-end">
        <el-button type="primary" icon="el-icon-video-camera-solid" circle @click="btn03"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="淘宝" placement="bottom-end">
        <el-button type="success" icon="el-icon-s-goods" circle @click="btn04"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="京东" placement="bottom-end">
        <el-button type="info" icon="el-icon-shopping-cart-full" circle @click="btn05"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="百度地图" placement="bottom-end">
        <el-button type="warning" icon="el-icon-map-location" circle @click="btn06"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="微博" placement="bottom-end">
        <el-button type="danger" icon="el-icon-s-promotion" circle @click="btn07"></el-button>
      </el-tooltip>
    </div>
    <h1>欢 迎 进 入 合 肥 学 院 教 务 系 统 在 线 平 台</h1>
    <!-- 时间控件 -->
    <div class="test-clock-container">
    <flip-clock />
  </div>

    <h2>该 项 目 由 个 人 开 发 完 成</h2>
    <h3>该 平 台 用 于 管 理 学 生 基 本 信 息</h3>
    <div class="btn">
      <el-button type="success" @click="btn01">了解更多</el-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import FlipClock from 'kuan-vue-flip-clock'
export default {
  data() {
    return {
    };
  },
  components:{
    FlipClock
  },
  mounted() {
  },
  methods: {
    btn01() {
      window.location.href = "https://github.com/reneforever";
    },
    btn02() {
      window.location.href = "https://www.baidu.com";
    },
    btn03() {
      window.location.href = "https://www.iqiyi.com/";
    },
    btn04() {
      window.location.href = "https://www.taobao.com";
    },
    btn05() {
      window.location.href = "https://www.jd.com";
    },
    btn06() {
      window.location.href = "https://map.baidu.com/@13541796,3621663,13z";
    },
    btn07() {
      window.location.href = "https://weibo.com/";
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
}
.container {
  position: absolute;
  width: 100%;   
  height: 100%;
  background: url("../../assets/milestones_background.jpg")no-repeat;
  background-size: 100% 100%;
}
.web-link {
  float: right;
  margin-right: 60px;
  margin-top: 20px;
  span {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-right: 30px;
  }
}
h1 {
  margin-top: 10.625rem;
  text-align: center;
  color: #fff;
}
h2 {
  margin-top: 3.125rem;
  display: block;
  color: #fff;
  text-align: center;
}
h3 {
  margin-top: .625rem;
  display: block;
  color: #fff;
  text-align: center;
}
.btn {
  text-align: center;
  margin-top: 20px;
}
.test-clock-container {
    font: normal 12px 'Helvetica Neue', Helvetica, sans-serif;
    user-select: none;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>