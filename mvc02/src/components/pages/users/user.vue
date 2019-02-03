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
  </el-card>
</template>

<script>
export default {};
</script>

<style>
.search {
  margin: 15px 0;
}
.el-col-8{
    margin: 0px;
}
</style>
