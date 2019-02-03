<template>
  <el-card>
    <!-- 1.面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 2.搜索框 -->
    <el-row class="search">
      <el-col :span="8">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchData"></el-button>
        </el-input>
      </el-col>
      <el-col :span="16">&nbsp;&nbsp;
        <el-button type="success" @click="addDialog = true" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 3.表格区域 -->
    <el-table :data="dataList" border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column label="用户状态">
        <template slot-scope="scope">
          <!-- {{scope.row.id}} -->
          <!-- 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。 -->
          <el-switch @change="change(scope.row.id,scope.row.mg_state)" v-model="scope.row.mg_state"></el-switch>
          <!-- scope.row: 当前行的数据源对象 -->
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="200">
        <template slot-scope="scope">
          <!-- 编辑 -->
          <el-button
            @click="openEdit(scope.row.id)"
            plain
            size="mini"
            type="primary"
            icon="el-icon-edit"
          ></el-button>
          <!-- 删除 -->
          <el-button
            @click="del(scope.row.id)"
            plain
            size="mini"
            type="danger"
            icon="el-icon-delete"
          ></el-button>
          <!-- 设置角色信息 -->
          <el-button
            @click="role(scope.row.id)"
            plain
            size="mini"
            type="success"
            icon="el-icon-check"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 4.分页组件 -->
     <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-sizes="[5,10]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
    data(){
        return {
            //搜索信息
            search:'',
            // 页容量
            pagesize:5,
            // 当前页
            pagenum:1,
            // 数据源
            dataList:[],
            // 数据的总条数
            total:0,
            // 控制新增的对话框
            addDialog:false,
            addObj:{
                username:"",
                password:"",
                email:"",
                mobile:""
            },

        }
    },
    methods:{
        // 定义一个获取数据列表
        async getAllList(){
            var res = await this.$http.get(`/user?pagenum=${this.pagenum}&pagesize=${this.pagesize}&query=${this.search}`,{
                headers:{
                    Authorization:window.localStorage.getItem("token")
                }
            });
            // 将获得的数据进行解构赋值
            var {meta,data} = res.data
            // 判断返回的状态值是否是成功
            if(meta.status===200){
                this.dataList = data.users;
                this.total = data.total;
            }
        },
        // 当页容量发生改变时触发
        sizeChange(size){
            this.pagesize = size
            // 重新获取数据
            this.getAllList()
        },
        // 当前页改变时触发事件,current-change
        currentChange(num){
            this.pagenum = num
            // 重新请求数据
            this.getAllList()
        },
        // 索索数据
        searchData(){
            this.getAllList();
        }
    }
};
</script>

<style>
.search {
  margin: 15px 0;
}
</style>
