<template>
  <div>
    <el-container direction="vertical">
      <searchHead @clickSearchButton="clickSearchButton"></searchHead>
      <el-main>
        <el-tabs tab-position="left" style="margin-left: 30px">
          <el-tab-pane label="基本信息">
            <el-table
              :data="BasicInfoData"
              style="width: 100%">
              <el-table-column
                prop="propName"
                label="属性名称"
                width= "180">
              </el-table-column>
              <el-table-column
                prop="propValue"
                label="属性的值">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="字义列表">
            <el-table
              :data="MeaningsData"
              style="width: 100%">
              <el-table-column
                prop="number"
                label="序号"
                width= "70">
              </el-table-column>
              <el-table-column
                prop="meaning"
                label="字义">
              </el-table-column>
              <el-table-column
                prop="example"
                label="举例">
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
import { getSingleCharInfo, getSingleCharMeaning } from '@/api/search'

export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      BasicInfoData: [],
      MeaningsData: []
    }
  },
  methods: {
    clickSearchButton(theCharacter) {
      getSingleCharInfo(theCharacter).then(response => {
        // console.log(response.data[0])
        console.log(response.data[0].character)
        const result = response.data[0]
        this.BasicInfoData = [{
          propName: '字形',
          propValue: result.character
        }, {
          propName: '拼音',
          propValue: result.pronounce
        }, {
          propName: 'Unicode编码',
          propValue: result.unicode
        }, {
          propName: '结构',
          propValue: result.structure
        }, {
          propName: '构字方式',
          propValue: result.create_method
        }, {
          propName: '部首',
          propValue: result.radical
        }, {
          propName: '笔画',
          propValue: result.stroke_number
        }, {
          propName: '笔顺',
          propValue: result.stroke_order
        }, {
          propName: '字频',
          propValue: result.frequency
        }]
      })

      getSingleCharMeaning(theCharacter).then(response => {
        // console.log(response.data[0])
        console.log(response.data[1])
        const result = response.data[1]
        this.MeaningsData = result
      })
    }
  }
}
</script>

<style scoped>
  .el-main {
    color: #333;
    text-align: center;
  }
</style>
