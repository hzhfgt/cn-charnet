<template>
  <div>
    <el-container direction="vertical">
      <searchHead @clickSearchButton="clickSearchButton"></searchHead>
      <el-main>
        <el-tabs value="first" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="结构相似" name="first">
            <el-table
              :data="tableData1"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="charName"
                label="字形"
                width="180">
              </el-table-column>
              <el-table-column
                prop="structure"
                label="结构"
                width="180">
              </el-table-column>
              <el-table-column
                prop="info"
                label="说明">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="部件相似" name="second">
            <el-table
              :data="tableData2"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="charName"
                label="字形"
                width="180">
              </el-table-column>
              <el-table-column
                prop="components"
                label="共同部件"
                width="180">
              </el-table-column>
              <el-table-column
                prop="info"
                label="说明">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="笔画相似" name="third">
            <el-table
              :data="tableData3"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="charName"
                label="字形"
                width="180">
              </el-table-column>
              <el-table-column
                prop="strokes"
                label="共同笔画"
                width="180">
              </el-table-column>
              <el-table-column
                prop="info"
                label="说明">
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
import { getSimilarStructure, getSimilarComponent, getSimilarChoke } from '@/api/search'

export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      tableData1: [],
      tableData2: [],
      tableData3: []
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    clickSearchButton(theCharacter) {
      getSimilarStructure(theCharacter).then(response => {
        // console.log(response.data[0])
        console.log(response.data)
        const result = response.data
        this.tableData1 = result
      })
      getSimilarComponent(theCharacter).then(response => {
        // console.log(response.data[0])
        console.log(response.data)
        const result = response.data
        this.tableData2 = result
      })
      getSimilarChoke(theCharacter).then(response => {
        // console.log(response.data[0])
        console.log(response.data)
        const result = response.data
        this.tableData3 = result
      })
    }
  }
}
</script>

<style scoped>

</style>
