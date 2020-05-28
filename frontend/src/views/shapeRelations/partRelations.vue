<template>
  <div>
    <el-container direction="vertical">
      <searchHead @clickSearchButton="clickSearchButton"></searchHead>
      <el-main>
        <el-tree
          :props="props"
          :load="loadNode"
          lazy
          v-if="showTree">
        </el-tree>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import searchHead from '@/views/components/searchHead.vue'
import { getComponents } from '@/api/search'

export default {
  name: 'Index',
  components: {
    searchHead
  },
  data() {
    return {
      character: '',
      showTree: false,
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      }
    }
  },
  methods: {
    clickSearchButton(theCharacter) {
      this.character = theCharacter
      // 刷新el-tree
      this.showTree = false
      this.$nextTick(() => {
        this.showTree = true
      })
    },
    loadNode(node, resolve) {
      console.log(node.label)
      if (node.level === 0) {
        return resolve([{ name: '点击此处展开' }])
      }
      if (node.level === 1) {
        return resolve([{ name: this.character }])
      }
      getComponents(node.label).then(response => {
        // console.log(response.data[0])
        // console.log(response.data[0].head_tail)
        if (response.data.length === 0) {
          return resolve([])
        }
        const components = response.data[0].head_tail
        var str = '['
        for (let i = 0; i < components.length; i++) {
          str = str + "{name:'" + components.charAt(i) + "'}"
          if (i !== components.length - 1) {
            str = str + ','
          }
        }
        str = str + ']'
        const data = eval('(' + str + ')')
        console.log(str)
        resolve(data)
      })
    }
  }
}
</script>

<style scoped>

</style>
