<template>
  <div>
    <!-- 行内表单 -->
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top:20px">
      <el-form-item prop="pro">
        <el-input v-model="searchMap.pro" placeholder="课程名称" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="fetchData">查询</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="handleAdd">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" height="525" stripe style="width: 100%">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="pro" label="学科"></el-table-column>
      <el-table-column prop="score" label="成绩" width="100"></el-table-column>
      <el-table-column label="操作" width="110">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10,20,50]"
      :page-size="pageSize"
      background
      layout="total,sizes,prev,pager,next,jumper"
      :total="1000"
    ></el-pagination>

      <el-dialog title="课程添加" :visible.sync="dialogFormVisible" width="500px">
        <el-form
          :rules="rules"
          status-icon ref="pojoForm"
          :model="pojo"
          label-width="100px"
          label-position="right"
          style="width:400px;"
        >
          <el-form-item label="日期" prop="date">
            <el-input v-model="pojo.date"></el-input>
          </el-form-item>
          <el-form-item label="课程名" prop="pro">
            <el-input v-model="pojo.pro"></el-input>
          </el-form-item>
          <el-form-item label="成绩" prop="score">
            <el-input v-model="pojo.score"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="pojo.id === undefined?addData('pojoForm'):updateData('pojoForm')">确定</el-button>
        </div>
      </el-dialog>

    <el-alert effect="dark" title="谨慎修改成绩" type="warning"></el-alert>
  </div>
</template>

<script>
import classesApi from "@/api/classes";
export default {
  created() {
    this.fetchData();
  },
  beforeMount() {
    this.$alert("如信息有误，请前去教导处咨询教师修改", "提示", {
      confirmButtonText: "确定"
    });
  },
  data() {
    return {
      date: "",
      pro: "",
      score: "",
      list: [],
      pageSize: 9, //每页显示条数
      currentPage: 1, //默认当前页码
      total: 0, //总记录数
      searchMap: {
        pro:''
      }, //条件查询的绑定字段值

      pojo:{
        date:'',
        pro:'',
        score:''
      },
      dialogFormVisible:false,
      rules:{
        date:[{required:true,message:'日期不能为空',trigger:'blur'}],
        pro:[{required:true,message:'课程名不能为空',trigger:'blur'}],
        score:[{required:true,message:'成绩不能为空',trigger:'blur'}]
      }
    };
  },
  methods: {
    fetchData() {
      // classesApi.getList().then(response => {
      classesApi
        .search(this.currentPage, this.pageSize, this.searchMap)
        .then(response => {
          console.log(response.data);
          this.list = response.data.data.rows;
          this.total = response.data.data.total;
        });
    },
    handleEdit(scoped) {
      console.log(scoped.date, scoped.pro, scoped.score);
    },
    // 当每页显示的条数改变后调用,val是选择的条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.fetchData();
    },

    //提交新增数据
    addData(formName){
      this.$refs[formName].validate(valid=>{
        if(valid){
          alert('添加成功');
          this.dialogFormVisible = false
        } else {
          return false
        }
      })
    },
    //打开新窗口
    handleAdd(){
      this.dialogFormVisible = true
      this.$nextTick(()=>{
        this.$refs['pojoForm'].resetFields()
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-top: 5px;
  margin-left: 10px;
}
.el-table {
  margin-top: 5px;
}
.el-pagination {
  position: absolute;
  margin-left: 60px;
  margin-top: 5px;
}
.el-alert {
  position: absolute;
  width: 400px;
  right: 0;
}
</style>