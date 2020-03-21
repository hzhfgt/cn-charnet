<template>
  <div>
    <el-container direction="vertical">
      <searchHead></searchHead>
      <el-main>
        <el-tabs value="first" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="字义反查" name="first">
            <el-table
              :data="tableData1"
              style="width: 100%">
              <el-table-column
                prop="charName"
                label="字形"
                width="180">
              </el-table-column>
              <el-table-column
                prop="meaning"
                label="相关字义">
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
          </el-tab-pane>
          <el-tab-pane label="说文反查" name="second">
            <el-table
              :data="tableData2"
              style="width: 100%">
              <el-table-column
                prop="charName"
                label="字形"
                width="180">
              </el-table-column>
              <el-table-column
                prop="meaning"
                label="相关字义">
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
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import searchHead from '@/views/components/searchHead.vue'

export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      tableData1: [{
        charName: '摹',
        meaning: '仿效，照着样子做'
      }, {
        charName: '遵',
        meaning: '沿着，依照，按照'
      }, {
        charName: '映',
        meaning: '反照，照射而显示'
      }, {
        charName: '循',
        meaning: '遵守，依照沿袭'
      }],
      tableData2: [{
        charName: '摹',
        meaning: '仿效，照着样子做'
      }, {
        charName: '遵',
        meaning: '沿着，依照，按照'
      }, {
        charName: '映',
        meaning: '反照，照射而显示'
      }]
    }
  },
  methods: {
    handleSearch(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>

</style>
