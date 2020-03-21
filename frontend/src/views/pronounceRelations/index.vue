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
                <el-button type="primary">查询</el-button>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple" style="font-size: 50px">
                照
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
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
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
const cityOptions = ['声母相同', '韵母相同', '声调相同', '前后鼻音', '读音相似', '其他']
export default {
  name: 'Index',
  components: {
  },
  data() {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      tableData: [{
        charName: '召',
        pronounce: 'zhào,shào'
      }, {
        charName: '着',
        pronounce: 'huó,zháo,zhāo,zhe'
      }, {
        charName: '爪',
        pronounce: 'zhǎo,zhuǎ'
      }, {
        charName: '着',
        pronounce: 'huó,zháo,zhāo,zhe'
      }, {
        charName: '啁',
        pronounce: 'zhōu,zhāo,tiào'
      }, {
        charName: '着',
        pronounce: 'huó,zháo,zhāo,zhe'
      }]
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleSearch(index, row) {
      console.log(index, row)
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
