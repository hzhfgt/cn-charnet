<template>
  <el-header height="120px">
    <div class="search-header">
      <el-row :gutter="0">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            请输入要查询的汉字
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <el-input v-model="input" placeholder="请输入要查询的单字"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-button type="primary" @click="clickSearchButton">查询</el-button>
            <el-button type="danger" @click="clickAddButton">添加</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" style="font-size: 50px">
            {{input}}
          </div>
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'SearchHeadWithAdd',
  data() {
    return {
      input: ''
    }
  },
  methods: {
    clickSearchButton() {
      this.$emit('clickSearchButton', this.input)
    },
    clickAddButton() {
      this.$emit('clickAddButton', this.input)
    }
  }
}
</script>

<style scoped>
  .search-header {
    margin: 30px auto;
  }
  .el-header {
    /*background-color: #B3C0D1;*/
    background-color: #e9e9ea;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #e9e9ea;
  }
  .bg-purple-light {
    background: #e9e9ea;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-size: 20px;
  }
</style>
