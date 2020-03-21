<template>
  <div>
    <el-container direction="vertical">
      <searchHead></searchHead>
      <el-main>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :default-expand-all="true"></el-tree>
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
      data: [{
        label: '照',
        children: [{
          label: '昭',
          children: [{
            label: '日'
          }, {
            label: '召',
            children: [{
              label: '刀'
            }, {
              label: '口'
            }]
          }]
        }, {
          label: '灬'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
