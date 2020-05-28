<template>
  <div>
    <el-container direction="vertical">
      <el-header height="157px">
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
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" style="font-size: 50px">
                {{input}}
              </div>
            </el-col>
          </el-row>
          <el-row class="tac">
            <el-col :span="6" style="text-align: right">
              搜索选项 :
            </el-col>
            <el-col :span="3" :offset="2">
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选(完全相同)</el-checkbox>
            </el-col>
            <el-col :span="10">
              <el-checkbox-group v-model="checkedOptions" @change="handleCheckedOptionsChange">
                <el-checkbox v-for="op in options" :label="op" :key="op">{{op}}</el-checkbox>
              </el-checkbox-group>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          style="width: 100%"
          border>
          <el-table-column
            prop="charName"
            label="字形">
          </el-table-column>
          <el-table-column
            prop="pronounce"
            label="发音">
          </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleSearch(scope.$index, scope.row)">查询</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getPronounce } from '@/api/search'

const Coptions = ['声母相同', '韵母相同', '声调相同', '前后鼻音', '读音相似', '其他']
export default {
  name: 'Index',
  components: {
  },
  data() {
    return {
      input: '',
      checkAll: false,
      checkedOptions: ['声母相同', '韵母相同'],
      options: Coptions,
      isIndeterminate: true,
      tableData: []
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedOptions = val ? Coptions : []
      this.isIndeterminate = false
    },
    handleCheckedOptionsChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.options.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
    },
    clickSearchButton() {
      getPronounce(this.input, this.checkedOptions).then(response => {
        console.log(response.data)
        const result = response.data
        this.tableData = result
      })
    },
    handleSearch(index, row) {
      console.log(index, row)
      console.log(this.tableData[index].charName)
      this.input = this.tableData[index].charName
      this.clickSearchButton()
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
    line-height: 30px;
  }
  .el-row {
    margin-bottom: 20px;
    background: #e9e9ea;
  }
  .el-col {
    border-radius: 4px;
    background: #e9e9ea;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    background: #e9e9ea;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-size: 20px;
  }
</style>
