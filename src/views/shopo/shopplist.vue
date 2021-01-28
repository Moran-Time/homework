<template>
  <div>
    <div class="shopp">
      <span>品类管理</span>
      <el-button type="info">+添加品类</el-button>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="品类ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="品类名称" width="380">
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">修改名称</el-button>
          <el-button type="text" size="small">查看其子品类</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.$netClient.OTHER().then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.shopp {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-size: 30px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>