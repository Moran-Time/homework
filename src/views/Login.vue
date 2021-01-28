<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="name" style="margin-left: -100px">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item prop="pass" style="margin-left: -100px">
        <el-input v-model="ruleForm.pass"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="login('ruleForm')" style="margin-left: -100px"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        pass: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$netClient
            .LOGIN(this.ruleForm.name, this.ruleForm.pass)
            .then((res) => {
              console.log(res);
              this.$router.push("/home");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 400px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // background: #ccc;
}
</style>
