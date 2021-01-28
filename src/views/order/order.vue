<template>
  <div>
    <div class="shopp">
      <span>订单管理</span>
    </div>
    <p></p>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="">
        <el-select v-model="formInline.Aid" placeholder="按订单查询">
          <el-option label="按订单查询" value="search"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input
          v-model="formInline.user"
          placeholder="请输入订单号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" style="width: 100%">
      <el-table-column prop="orderNo" label="订单号" width="180">
      </el-table-column>
      <el-table-column prop="receiverName" label="收件人" width="150">
      </el-table-column>
      <el-table-column prop="statusDesc" label="订单状态" width="150">
      </el-table-column>
      <el-table-column prop="payment" label="订单总价" width="180">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button type="text">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      formInline: {
        Aid: "",
        user: "",
      },
    };
  },

  mounted() {
    this.$netClient.ORDER().then((res) => {
      console.log(res);
      this.list = res.data.data.list;
      this.total = res.data.data.total;
    });
  },

  methods: {
    handleCurrentChange(val) {
      console.log(val);
      this.$netClient.ORDER(val).then((res) => {
        console.log(res);
        this.list = res.data.data.list;
        this.total = res.data.data.total;
      });
    },

    search() {},
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
</style>