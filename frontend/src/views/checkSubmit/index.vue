<template>
  <div>
    <el-container direction="vertical">
      <el-header height="120px">
        <div class="check-header">
          <el-row :gutter="0">
            <el-col :span="8" style="font-size: 25px">
              操作：
            </el-col>
            <el-col :span="2" :offset="1">
              <el-button type="success" @click="clickComfirm">确认</el-button>
            </el-col>
            <el-col :span="2" :offset="0">
              <div>
                <el-button type="danger" @click="clickReject">拒绝</el-button>
              </div>
            </el-col>
            <el-col :span="2" :offset="6">
              <div>
                <el-button type="warning" @click="clickRefresh">刷新</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <el-tabs v-model="tabValue" type="border-card">
          <el-tab-pane label="通假字" name="first">
            <el-table
              :data="tableData1"
              style="width: 100%">
              <el-table-column
                prop="char1"
                label="字1"
                width="180">
              </el-table-column>
              <el-table-column
                prop="char2"
                label="字2">
              </el-table-column>
              <el-table-column
                prop="example"
                label="示例">
              </el-table-column>
              <el-table-column
                prop="source"
                label="来源">
              </el-table-column>
              <el-table-column label="选择" width="180">
                <template slot-scope="scope">
                  <el-checkbox @change = handleSelected_tongjiazi(scope.$index)></el-checkbox>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="异体字" name="second">
            <el-table
              :data="tableData2"
              style="width: 100%">
              <el-table-column
                prop="char1"
                label="字1"
                width="180">
              </el-table-column>
              <el-table-column
                prop="char2"
                label="字2"
                width="180">
              </el-table-column>
              <el-table-column
                prop="relationType"
                label="关系类型">
              </el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-checkbox @change = handleSelected_variants(scope.$index)>备选项</el-checkbox>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { refresh_tongjiazi, refresh_variants, addTongjiazi_SH, addVariants_SH, deleteTongjiazi_SH, deleteVariants_SH } from '@/api/add'

export default {
  name: 'Index',
  components: {
  },
  data() {
    return {
      tabValue: 'first',
      tableData1: [],
      tableData2: [],
      selectedIndex_tongjiazi: [],
      selectedIndex_variants: []
    }
  },
  methods: {
    handleSearch(index, row) {
      console.log(index, row)
    },
    clickComfirm() {
      let postData = []
      if (this.tabValue === 'first') {
        for (let i of this.selectedIndex_tongjiazi) {
          postData.push(this.tableData1[i])
        }
        console.log(postData)
        addTongjiazi_SH(postData).then(response => {
          this.$message({
            message: '通过审核，数据已录入数据库',
            type: 'success'
          })
        })
      } else if (this.tabValue === 'second') {
        for (let i of this.selectedIndex_variants) {
          postData.push(this.tableData2[i])
        }
        console.log(postData)
        addVariants_SH(postData).then(response => {
          this.$message({
            message: '通过审核，数据已录入数据库',
            type: 'success'
          })
        })
      }
    },
    clickReject() {
      let postData = []
      if (this.tabValue === 'first') {
        for (let i of this.selectedIndex_tongjiazi) {
          postData.push(this.tableData1[i])
        }
        console.log(postData)
        deleteTongjiazi_SH(postData).then(response => {
          this.$message({
            message: '已拒绝，数据提交请求已清除'
          })
        })
      } else if (this.tabValue === 'first') {
        for (let i of this.selectedIndex_variants) {
          postData.push(this.tableData2[i])
        }
        console.log(postData)
        deleteVariants_SH(postData).then(response => {
          this.$message({
            message: '已拒绝，数据提交请求已清除'
          })
        })
      }
    },
    clickRefresh() {
      refresh_tongjiazi().then(response => {
        console.log(response.data)
        const result = response.data
        this.tableData1 = result
        this.$message({
          message: '已刷新最新的通假字提交数据',
          type: 'success'
        })
      })
      refresh_variants().then(response => {
        console.log(response.data)
        const result = response.data
        this.tableData2 = result
        this.$message({
          message: '已刷新最新的异体字提交数据',
          type: 'success'
        })
      })
    },
    handleSelected_tongjiazi(index) {
      const theIndex = this.selectedIndex_tongjiazi.indexOf(index)
      if (theIndex === -1) {
        this.selectedIndex_tongjiazi.push(index)
      }
      else {
        this.selectedIndex_tongjiazi.splice(theIndex, 1)
      }
    },
    handleSelected_variants(index) {
      const theIndex = this.selectedIndex_variants.indexOf(index)
      if (theIndex === -1) {
        this.selectedIndex_variants.push(index)
      }
      else {
        this.selectedIndex_variants.splice(theIndex, 1)
      }
    }
  }
}
</script>

<style scoped>
  .check-header {
    margin: 30px auto;
  }
  .el-header {
    /*background-color: #B3C0D1;*/
    background-color: #e9e9ea;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
