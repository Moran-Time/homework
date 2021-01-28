<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/about">
            <i class="el-icon-menu"></i>
            <span slot="title">Home</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>商品</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shopp">商品管理</el-menu-item>
              <el-menu-item index="/shopplist">品类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>订单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/order">订单管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main> <router-view /></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
