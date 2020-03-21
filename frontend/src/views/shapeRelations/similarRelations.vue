<template>
  <div>
    <el-container direction="vertical">
      <searchHead></searchHead>
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

export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      tableData1: [{
        charName: '熬',
        structure: '上下结构',
        info: 'some info about this relation'
      }, {
        charName: '愁',
        structure: '上下结构',
        info: 'some info about this relation'
      }, {
        charName: '瞥',
        structure: '上下结构',
        info: 'some info about this relation'
      }, {
        charName: '望',
        structure: '上下结构',
        info: 'some info about this relation'
      }, {
        charName: '塑',
        structure: '上下结构',
        info: 'some info about this relation'
      }, {
        charName: '煞',
        structure: '上下结构',
        info: 'some info about this relation'
      }],
      tableData2: [{
        charName: '点',
        components: '灬',
        info: 'some info about this relation'
      }, {
        charName: '然',
        components: '灬',
        info: 'some info about this relation'
      }, {
        charName: '绍',
        components: '召',
        info: 'some info about this relation'
      }, {
        charName: '迢',
        components: '召',
        info: 'some info about this relation'
      }, {
        charName: '旺',
        components: '日',
        info: 'some info about this relation'
      }, {
        charName: '旭',
        components: '日',
        info: 'some info about this relation'
      }],
      tableData3: [{
        charName: '蓝',
        strokes: '13',
        info: 'some info about this relation'
      }, {
        charName: '跳',
        strokes: '13',
        info: 'some info about this relation'
      }, {
        charName: '腾',
        strokes: '13',
        info: 'some info about this relation'
      }, {
        charName: '蒙',
        strokes: '13',
        info: 'some info about this relation'
      }, {
        charName: '路',
        strokes: '13',
        info: 'some info about this relation'
      }, {
        charName: '塑',
        strokes: '13',
        info: 'some info about this relation'
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>
