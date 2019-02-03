<template>
  <div class="home">
    <el-container>
      <el-header>
        <!-- 头部结构 -->
        <el-row>
          <el-col :span="6">
            <div class="logo">
              <img src="@/assets/images/logo.png" alt>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="txt">电商后台管理系统</div>
          </el-col>
          <el-col :span="6">
            <div class="btn">
              <a href="#">退出</a>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏导航 -->
          <el-menu
            :router="true"
            :unique-opened="true"
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <!-- 一级菜单 -->
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item index="/user">
                <i class="el-icon-star-on"></i>
                用户列表
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <!-- 一级菜单 -->
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item index="2-1">
                <i class="el-icon-star-on"></i>角色列表
              </el-menu-item>
              <el-menu-item index="/rights">
                <i class="el-icon-star-on"></i>权限列表
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <!-- 一级菜单 -->
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item index="3-1">
                <i class="el-icon-star-on"></i>商品列表
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-star-on"></i>分类参数
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-star-on"></i>商品分类
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <!-- 一级菜单 -->
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item index="4-1">
                <i class="el-icon-star-on"></i>订单列表
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <!-- 一级菜单 -->
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item index="5-1">
                <i class="el-icon-star-on"></i>数据报表
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 主体显示 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.home,
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.txt{
    font-size: 20px;
    font-weight: 700;
}
.logo {
  float: left;
}
.btn {
  float: right;
}
.btn a {
  text-decoration: none;
}
/* 侧边栏导航样式 */
.el-menu{
    height: 100%;
}
</style>
