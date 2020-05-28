<template>
  <div>
    <el-container direction="vertical">
      <searchHeadWithAdd @clickSearchButton="clickSearchButton" @clickAddButton="dialogFormVisible = true" ref = "searchHead"></searchHeadWithAdd>
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
            prop="type"
            label="关系类型">
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
      <el-dialog title="添加新关系" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="字1" :label-width="formLabelWidth">
            <el-input v-model="form.char1" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="字2" :label-width="formLabelWidth">
            <el-input v-model="form.char2" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="异体字类型" :label-width="formLabelWidth">
            <el-input v-model="form.relationType" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="AddItem">确 定</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
import searchHeadWithAdd from '@/views/components/searchHeadWithAdd.vue'
import { getVariants } from '@/api/search'
import { addVariants } from '@/api/add'

export default {
  name: 'Index',
  components: {
    searchHeadWithAdd
  },
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        char1: '',
        char2: '',
        relationType: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSearch(index, row) {
      console.log(index, row)
      console.log(this.tableData[index].charName)
      this.$refs.searchHead.input = this.tableData[index].charName
      this.clickSearchButton(this.tableData[index].charName)
    },
    clickSearchButton(theCharacter) {
      getVariants(theCharacter).then(response => {
        console.log(response.data)
        const result = response.data
        this.tableData = result
      })
    },
    AddItem() {
      addVariants(this.form).then(response => {
        this.$message({
          message: '待审核数据已提交',
          type: 'success'
        })
      })
      this.dialogFormVisible = false
    }
  }
}
</script>

<style scoped>

</style>
