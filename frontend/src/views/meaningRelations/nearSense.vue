<template>
  <div>
    <el-container direction="vertical">
      <searchHead @clickSearchButton="clickSearchButton" ref="searchHead"></searchHead>
      <el-main>
        <el-tabs v-model="tabValue" type="border-card" @tab-click="handleClick">
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
import { getRelatedMeaning, getRelatedMeaning_SW } from '@/api/search'

export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      tabValue: 'first',
      tableData1: [],
      tableData2: []
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSearch(index, row) {
      console.log(index, row)
      if (this.tabValue === 'first') {
        console.log(this.tableData1[index].charName)
        this.$refs.searchHead.input = this.tableData1[index].charName
        getRelatedMeaning(this.tableData1[index].charName).then(response => {
          console.log(response.data)
          const result = response.data
          this.tableData1 = result
        })
        getRelatedMeaning_SW(this.tableData1[index].charName).then(response => {
          console.log(response.data)
          const result = response.data
          this.tableData2 = result
        })
      } else if (this.tabValue === 'second') {
        console.log(this.tableData2[index].charName)
        this.$refs.searchHead.input = this.tableData2[index].charName
        getRelatedMeaning(this.tableData2[index].charName).then(response => {
          console.log(response.data)
          const result = response.data
          this.tableData1 = result
        })
        getRelatedMeaning_SW(this.tableData2[index].charName).then(response => {
          console.log(response.data)
          const result = response.data
          this.tableData2 = result
        })
      }

    },
    clickSearchButton(theCharacter) {
      getRelatedMeaning(theCharacter).then(response => {
        console.log(response.data)
        const result = response.data
        this.tableData1 = result
      })
      getRelatedMeaning_SW(theCharacter).then(response => {
        console.log(response.data)
        const result = response.data
        this.tableData2 = result
      })
    }
  }
}
</script>

<style scoped>

</style>
