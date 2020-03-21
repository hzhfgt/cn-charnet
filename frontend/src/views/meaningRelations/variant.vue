<template>
  <div>
    <el-container direction="vertical">
      <searchHead></searchHead>
      <el-main>
        <el-table
          :data="tableData"
          style="width: 100%"
          border>
          <el-table-column
            prop="charName"
            label="字形">
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
import searchHead from '@/views/components/searchHead.vue'

export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      tableData: [{
        charName: '曌'
      }, {
        charName: '炤'
      }, {
        charName: '㷖'
      }, {
        charName: '燳'
      }, {
        charName: '瞾'
      }, {
        charName: '𣉬'
      }, {
        charName: '𣊕'
      }, {
        charName: '𣊧'
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
