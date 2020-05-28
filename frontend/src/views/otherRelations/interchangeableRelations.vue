<template>
  <div>
    <el-container direction="vertical">
      <searchHeadWithAdd @clickSearchButton="clickSearchButton" @clickAddButton="dialogFormVisible = true" ref = "searchHead"></searchHeadWithAdd>
      <el-main>
        <el-table
          :data="tableData"
          style="width: 100%"
          border>
          <el-table-column prop="char2" label="字形"></el-table-column>
          <el-table-column prop="example" label="示例"></el-table-column>
          <el-table-column prop="source" label="出处"></el-table-column>
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
          <el-form-item label="示例" :label-width="formLabelWidth">
            <el-input v-model="form.example" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="出处" :label-width="formLabelWidth">
            <el-input v-model="form.source" autocomplete="off"></el-input>
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
import { getTongjiazi } from '@/api/search'
import { addTongjiazi } from '@/api/add'

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
        example: '',
        source: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSearch(index, row) {
      console.log(index, row)
      console.log(this.tableData[index].char2)
      this.$refs.searchHead.input = this.tableData[index].char2
      this.clickSearchButton(this.tableData[index].char2)
    },
    clickSearchButton(theCharacter) {
      getTongjiazi(theCharacter).then(response => {
        console.log(response.data)
        const result = response.data
        this.tableData = result
      })
    },
    AddItem() {
      addTongjiazi(this.form).then(response => {
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
