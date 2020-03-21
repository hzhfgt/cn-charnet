<template>
  <div>
    <el-container direction="vertical">
      <searchHead></searchHead>
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
                prop="examples"
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
export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      BasicInfoData: [{
        propName: '字形',
        propValue: '照'
      }, {
        propName: '拼音',
        propValue: 'zhào'
      }, {
        propName: 'Unicode编码',
        propValue: 'U+7167'
      }, {
        propName: '结构',
        propValue: '上下结构'
      }, {
        propName: '构字方式',
        propValue: '形声'
      }, {
        propName: '部首',
        propValue: '灬'
      }, {
        propName: '笔画',
        propValue: '13'
      }],
      MeaningsData: [{
        number: '1',
        meaning: '光线射在物体上',
        examples: '日～。～耀。～射。'
      }, {
        number: '2',
        meaning: '对着镜子或其他反光的东西看自己或其他人物的影像',
        examples: '～镜子。'
      }, {
        number: '3',
        meaning: '摄影',
        examples: '～相。拍～。'
      }, {
        number: '4',
        meaning: '画像或相片',
        examples: '小～。写～。'
      }, {
        number: '5',
        meaning: '看顾',
        examples: '～管。～顾。'
      }, {
        number: '6',
        meaning: '按着，依着',
        examples: '依～。遵～。～搬。～本宣科。'
      }, {
        number: '7',
        meaning: '凭证',
        examples: '护～。牌～。执～。'
      }, {
        number: '8',
        meaning: '知晓',
        examples: '心～不宣。肝胆相～。'
      }, {
        number: '9',
        meaning: '通知，通告',
        examples: '知～。～会。'
      }, {
        number: '10',
        meaning: '对着，向着',
        examples: '～壁。～敌人开枪。'
      }, {
        number: '11',
        meaning: '查对',
        examples: '对～。查～。'
      }]
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
