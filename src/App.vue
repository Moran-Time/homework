<template>
  <div id="app">
    <el-container>
      <el-header v-show="headerShow">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="4" class="float1">MMALL ADMIN</el-menu-item>
          <el-menu-item index="4" class="float2" @click="goout"
            >退出</el-menu-item
          >
          <el-menu-item index="4" class="float2">欢迎，admin</el-menu-item>
        </el-menu>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerShow: true,
    };
  },
  methods: {
    goout() {
      this.$router.push("/login");
    },
  },

  watch: {
    $route: {
      handler(newval, oldval) {
        if (newval.path == "/login") {
          this.headerShow = false;
        } else {
          this.headerShow = true;
        }
      },
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .float1 {
    float: left;
  }
  .float2 {
    float: right;
  }
}
</style>
