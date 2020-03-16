<template>
  <div>
    <el-container>
      <el-header height="120px">
        <div class="search-header">
          <el-row gutter="0">
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
                {{charName}}
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
<!--        <el-row class="tac">-->
<!--          <el-col :span="4">-->
<!--            <el-menu-->
<!--              default-active="2"-->
<!--              class="el-menu-vertical-demo"-->
<!--              @open="handleOpen"-->
<!--              @close="handleClose">-->
<!--              <el-menu-item index="1">-->
<!--                <i class="el-icon-menu"></i>-->
<!--                <span slot="title">基本信息</span>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="2">-->
<!--                <i class="el-icon-document"></i>-->
<!--                <span slot="title">字义列表</span>-->
<!--              </el-menu-item>-->
<!--            </el-menu>-->
<!--          </el-col>-->
<!--          <el-col :span="20">-->
<!--            <el-table-->
<!--              :data="tableData"-->
<!--              style="width: 100%">-->
<!--              <el-table-column-->
<!--                prop="number"-->
<!--                label="序号"-->
<!--                width= "180">-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="meaning"-->
<!--                label="字义">-->
<!--              </el-table-column>-->
<!--            </el-table>-->
<!--          </el-col>-->
<!--        </el-row>-->
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
export default {
  name: 'Index',
  data() {
    return {
      BasicInfoData: [{
        propName: '字形',
        propValue: '照'
      },{
        propName: '拼音',
        propValue: 'zhao'
      }, {
        propName: 'Unicode编码',
        propValue: '1234'
      }, {
        propName: '结构',
        propValue: '上下结构'
      }, {
        propName: '构字方式',
        propValue: '形声'
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
      }],
      input: '',
      charName: '照'
    }
  }
}
</script>

<style scoped>
  .search-header {
    margin: 35px auto;
  }
  .el-header {
    /*background-color: #B3C0D1;*/
    background-color: #e9e9ea;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    color: #333;
    text-align: center;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #e9e9ea;
  }
  .bg-purple-light {
    background: #e9e9ea;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-size: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
