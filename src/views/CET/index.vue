<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div class="logo">
                <img src="../../assets/CETlogo.png" alt />
              </div>
              <span class="cetTitle">C E T 考 试 简 介</span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main :style="{width:fullWidth,height:fullHeight}">
        <article>
          全国大学英 语四、六级考试(CET)系教育部主办、教育部考试中心主持和实施的一项大规模标准化考试。自1987年开始实施以来，四、六级考试已走过了近三十年的历程。为顺应我国高等教育发展的形势，深化大学英语的教学改革，四、六级考试经历了多次改革和完善，目前考试内容涵盖听、说、读、写、译等语言技能。
          CET笔试考试时间为每年6月和12月，CET口试考试时间为每年5月和11月。自2016年12月起，报考同一年度笔试的考生则具备报考同一级别口语考试资格。
        </article>
        <br />
        <article>CET同时设有非英语考试科目，包括日语四级(CJT4)、日语六级(CJT6)、俄语四级(CRT4)、俄语六级(CRT6)、德语四级(CGT4)、德语六级(CGT6)和法语四级(CFT4)，非英语考试科目每年6月开考一次，且不含口语考核环节。</article>
      </el-main>
      <el-footer :style="{width:fullWidth,height:fullHeight}">
        <div class="enter">考试报名入口</div>
        <el-button type="success" round @click="siji">英语四级</el-button>
        <el-button type="success" round @click="liuji">英语六级</el-button>
        <el-button type="warning" round @click="other">其他语种</el-button>
      </el-footer>
    </el-container>
    <!-- 设置canvas背景 -->
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      fullWidth: document.documentElement.clientWidth,
      fullHeight: document.documentElement.clientHeight,
    };
  },
  watch: {
    fullWidth(val) {
      if (!this.timer) {
        this.fullWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    this.get_bodyWidth();
    class Circle {
    //创建对象
    //以一个圆为对象
    //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
    //this.r是创建圆的半径，参数越大半径越大
    //this._mx,this._my是8移动的距离，参数越大移动
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = Math.random() * 10;
      this._mx = Math.random();
      this._my = Math.random();
    }
    //canvas 画圆和画直线
    //画圆就是正常的用canvas画一个圆
    //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
    drawCircle(ctx) {
      ctx.beginPath();
      //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
      ctx.arc(this.x, this.y, this.r, 0, 360)
      ctx.closePath();
      ctx.fillStyle = 'rgba(204, 20, 204, 0.3)';
      ctx.fill();
    }
    drawLine(ctx, _circle) {
      let dx = this.x - _circle.x;
      let dy = this.y - _circle.y;
      let d = Math.sqrt(dx * dx + dy * dy)
      if (d < 150) {
        ctx.beginPath();
        //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
        ctx.moveTo(this.x, this.y); //起始点
        ctx.lineTo(_circle.x, _circle.y); //终点
        ctx.closePath();
        ctx.strokeStyle = 'rgba(204, 20, 204, 0.3)';
        ctx.stroke();
      }
    }
    // 圆圈移动
    // 圆圈移动的距离必须在屏幕范围内
    move(w, h) {
      this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
      this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
      this.x += this._mx / 2;
      this.y += this._my / 2;
    }
  }
  //鼠标点画圆闪烁变动
  class currentCirle extends Circle {
    constructor(x, y) {
      super(x, y)
    }
    drawCircle(ctx) {
      ctx.beginPath();
      //注释内容为鼠标焦点的地方圆圈半径变化
      //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
      this.r = 8;
      ctx.arc(this.x, this.y, this.r, 0, 360);
      ctx.closePath();
      //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
      ctx.fillStyle = 'rgba(187, 26, 160, 0.6)'
      ctx.fill();
    }
  }
  //更新页面用requestAnimationFrame替代setTimeout
  // canvas.width = document.documentElement.clientWidth;
  // canvas.height = document.documentElement.clientHeight;
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let w = canvas.width = canvas.offsetWidth;
  let h = canvas.height = canvas.offsetHeight;
  let circles = [];
  let current_circle = new currentCirle(0, 0)
  let draw = function() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < circles.length; i++) {
      circles[i].move(w, h);
      circles[i].drawCircle(ctx);
      for (let j = i + 1; j < circles.length; j++) {
        circles[i].drawLine(ctx, circles[j])
      }
    }
    if (current_circle.x) {
      current_circle.drawCircle(ctx);
      for (var k = 1; k < circles.length; k++) {
        current_circle.drawLine(ctx, circles[k])
      }
    }
    requestAnimationFrame(draw)
  }
  let init = function(num) {
    for (var i = 0; i < num; i++) {
      circles.push(new Circle(Math.random() * w, Math.random() * h));
    }
    draw();
  }
  window.addEventListener('load', init(60));
  window.onmousemove = function(e) {
    e = e || window.event;
    current_circle.x = e.clientX-240;
    current_circle.y = e.clientY-110;
  }
  window.onmouseout = function() {
    current_circle.x = null;
    current_circle.y = null;
   }
  },
  methods: {
    get_bodyWidth() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.fullWidth = document.documentElement.clientWidth;
          that.fullWidth = window.fullWidth;
        })();
      };
    },
    siji() {
      const h = this.$createElement;
      this.$msgbox({
        title: "提示",
        message: h("p", null, [h("span", null, "即将打开四级报名页面")])
      });
      window.location.href =
        "https://passport.neea.cn/CETLogin?ReturnUrl=http://cet-bm.neea.edu.cn/Home/VerifyPassport/?LoginType=0";
    },
    liuji() {
      const a = this.$createElement;
      this.$msgbox({
        title: "提示",
        message: a("p", null, [a("span", null, "即将打开六级报名页面")])
      });
      window.location.href =
        "https://passport.neea.cn/CETLogin?ReturnUrl=http://cet-bm.neea.edu.cn/Home/VerifyPassport/?LoginType=0";
    },
    other() {
      const i = this.$createElement;
      this.$msgbox({
        title: "提示",
        message: i("p", null, [i("span", null, "即将打开报名页面")])
      });
      window.location.href =
        "https://passport.neea.cn/CETLogin?ReturnUrl=http://cet-bm.neea.edu.cn/Home/VerifyPassport/?LoginType=0";
    }
  }
};
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
}
.el-container {
  position: absolute;
  z-index: 100;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.el-main {
  background: url("../../assets/四六级背景.png") no-repeat;
  background-size: cover;
  border: 2px solid #ff44aa;
  border-radius: 25px;
  margin-top: 15px;
  article {
    text-indent: 25px;
  }
}

.el-footer {
  text-align: center;
  border: 2px solid #ff44aa;
  border-radius: 25px;
  margin-top: 20px;
  height: 60px;
  .enter {
    font-size: 14px;
    font-weight: 600;
    color: #8c0044;
    z-index: 1000;
    background: #fff;
    text-align: center;
    position: absolute;
    z-index: 100;
    margin-top: -10px;
  }
  .el-button {
    margin-top: 8px;
  }
}

.bg-purple-dark {
  background: #8c0044;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  margin-top: 25px;
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.logo {
  float: left;
  img {
    width: 60px;
    height: 55px;
    margin-top: -9px;
    margin-left: 10px;
  }
}
.cetTitle {
  color: #fff;
  font-size: 25px;
  font-family: "PingFang SC", "微软雅黑";
}
</style>
