<template>
  <page-container desc="输入建议/自动填充控件">
    <f-collapse-wrap title="输入建议基本用法" shadow="none">
      <div class="p24" style="min-height: 500px">
        <f-autocomplete
          v-model="current"
          :fetch-suggestions="querySearch"
          placeholder="Please input"
          clearable
          @select="handleSelect"
        >
          <template #item="{ value, link }">
            <div flex="main:justify">
              <div>{{ value }}</div>
              <div style="font-size: 12px; color: #999">{{ link }}</div>
            </div>
          </template>
        </f-autocomplete>

        <div class="pt-16">
          <f-alert>current: {{ current }}</f-alert>
        </div>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CompAutoInput',
  setup() {
    const current = ref('')
    const links = ref([])
    let timeout = null

    const loadAll = () => [
      { value: 'vue', link: 'https://github.com/vuejs/vue' },
      { value: 'element', link: 'https://github.com/ElemeFE/element' },
      { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
      { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
      { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
      { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
      { value: 'babel', link: 'https://github.com/babel/babel' },
      { value: 'f-ui-one', link: 'https://github.com/ymf-930/f-ui-one' },
    ]

    const handleSelect = item => {
      console.log('选中建议项', item)
      current.value = item.value
    }

    // 过滤函数
    const querySearch = (queryString, cb) => {
      const results = queryString
        ? links.value.filter(item => item.value.toLowerCase().includes(queryString.toLowerCase()))
        : links.value

      // 模拟远程获取数据
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        // call callback function to return suggestion objects
        cb(results)
      }, 3000 * Math.random())
    }

    onMounted(() => {
      links.value = loadAll()
    })
    return {
      current,
      links,
      querySearch,
      handleSelect,
    }
  },
}
</script>
