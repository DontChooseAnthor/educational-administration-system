<template>
  <div>
    <el-carousel :interval="5000">
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <img :src="img.url" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- 滚动通知效果 -->
    
    <el-divider content-position="center">
      <i class="el-icon-dessert"></i>
      <span>课外活动是大学生活不可或缺的一部分</span>
      <i class="el-icon-basketball"></i>
    </el-divider>
  
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="丰富校园文化" name="1">
        <div>大学生社团由学生自己创办，自己经营，实实在在的表现着当代大学生的精神风貌。包括我校在内，国内各高校都举办了丰富多彩的文化节、艺术节、女生节等等，这些丰富多彩的大学生课外活动，正是以社团做为根基，才能有大量精彩的节目和特别的创意，丰富了大学生的文化生活，也为高校校园文化建设添砖加瓦</div>
      </el-collapse-item>
      <el-collapse-item title="加强校际间的交流" name="2">
        <div>大学生社团之间的交流学习时学校交流的重要环节，相同性质的社团交流，可以相互学习经验，也可以跨校联合搞活动，增加彼此学校、学生、社团的了解。如果没有社团交流这一部分，校际交流将会减少许多价值</div>
      </el-collapse-item>
      <el-collapse-item title="提供一个自我表现与锻炼的平台" name="3">
        <div>大学生社团的成立从迸发灵感，思考可行性，到申请成立，再到维持一个社团的持续发展要做的各项工作，举办的各种活动，都由学生自己包办，指导老师只取到引导作用。大学生们总是在选择参加社团时已有自己的考虑，此次调 查表明，在选择参加何种社团的众多因素中， 7.4% 的人考虑的是社团的大小， 28.27% 考虑的是自己的特长能否得到发挥， 42.76% 的考虑的是能学到多少新知识，总地来看，占 43.11% 的人首先考虑参加的社团能否发掘和发展自身的潜力</div>
      </el-collapse-item>
      <el-collapse-item title="开展学校创新活动和实现创新教育" name="4">
        <div>大学生组织社团和参加社团活动 , 都有自己的某种需要 , 如情感的需要、发展的需要、学习的需要、展示才华的需要。不少同学参加协会的活动后，克服了交际障碍 , 促进了性格的转变，各方面的水平和能力都有了很大的提高。一些带有专业实践性质和学科交流性质的学术性社团经常开展学术讲座、研讨交流、技能竞赛等活动，在活跃校园学术氛围的同时，也激发了学生创新的热情，使那些有创新愿望的学生，可以在社团活动中得到实现，创造活动可以在社团中进行，创造才能可以在社团中发挥，创造成果可以首先在社团中得到肯定，借助学生社团实现：取我之所需，补我之不足，扬我之特长。学生社团是学科交叉、信息交融的媒介学生社团活动从另一个侧面也反映出学校的办学理念、教学质量、科研水平、管理思想</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { url: require("../../assets/s1.jpg") },
        { url: require("../../assets/s2.jpg") },
        { url: require("../../assets/s3.jpeg") },
        { url: require("../../assets/s4.jpeg") },
        { url: require("../../assets/s5.jpeg") }
      ],
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__container {
  margin-top: 20px;
  height: 400px;
}
.el-carousel__item {
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-divider{
  .el-divider__text{
    padding:0 10px;
  }
  span{
    font-weight: 600;
    font-family: "PingFang SC","微软雅黑";  
  }
}

</style>