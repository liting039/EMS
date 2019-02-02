<template>
  <div class="box">
    <!-- 创建一个登录组件 -->
    <div class="content">
      <h2>用户登录</h2>
      <el-form
        label-position="left"
        :model="loginObj"
        status-icon
        :rules="rules"
        ref="loginRule"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginObj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginObj.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginObj: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
          //   { min: 3, max: 10, message: "长度在3到5个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      // 使用async和await将异步的函数以同步的形式来实现
      this.$refs.loginRule.validate(async valid => {
        if (valid) {
          // 成功的代码
          var res = await this.$http.post("/login", this.loginObj).then(res => {
            console.log(res);
            var { meta, data } = res.data;
            if (meta.status === 200) {
              // 登录成功提示框
              this.$message({
                message: meta.msg,
                type: "success"
              });
              // 保存登录信息可以使用localstorage
              // 保存token
              window.localStorage.setItem("token", data.token);
              // 跳转到首页
              this.$router.push("/home");
            } else {
              this.message.error(meta.msg);
            }
          });
        } else {
          this.$message.error("参数不合法");
        }
      });
    }
  }
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;

  background-color: #2c3742;
  position: relative;
}
#app{
  margin-top: 0px;
}
.content {
  position: absolute;
  width: 500px;
  padding: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #fff;
}
.content h2 {
  text-align: center;
  color: #000;
  margin-bottom: 20px;
}
.mybtn {
  width: 100%;
}
</style>

