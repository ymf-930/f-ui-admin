<template>
  <page-container desc="基础映射配置示例，可拖动排序，并封装了通用的hook钩子函数，可进行复用。">
    <f-row :gutter="16">
      <f-col span="12">
        <f-collapse-wrap title="映射配置" shadow="none">
          <div class="p16">
            <key-value-mapping v-model="mapping"></key-value-mapping>
            <f-divider align="left">实际存储值</f-divider>
            <f-ace-editor :model-value="mappingJson" readonly></f-ace-editor>
          </div>
        </f-collapse-wrap>
      </f-col>
      <f-col span="12">
        <f-collapse-wrap title="useSortable" shadow="none">
          <f-ace-editor
            :model-value="STR"
            lang="typescript"
            readonly
            theme="sqlserver"
            height="850px"
            :snippets="false"
          ></f-ace-editor>
        </f-collapse-wrap>
      </f-col>
    </f-row>
  </page-container>
</template>

<script>
import { computed, ref } from 'vue'

const STR = `import Sortable from 'sortablejs'
import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * sortable hooks，用于创建拖拽排序列表
 * @param list 列表list<ref>
 * @param endFun 拖拽结束事件函数
 * @param option 其他sortable配置项
 */
export default function useSortable(list, endFun, option = {}) {
  const defaultOptions = {
    animation: 150,
    ghostClass: 'blue-background-class',
    // ************* 拖动对象移动样式
    dragClass: 'drag-item-class',
    // ************* 禁用html5原生拖拽行为
    forceFallback: true,
    handle: '.drag'
  }
  const listRef = ref(null)
  let sortInstance = null
  onMounted(() => {
    if (sortInstance) sortInstance.destroy()
    const el = listRef.value
    if (!el) return
    sortInstance = Sortable.create(el, {
      ...defaultOptions,
      ...option,
      onUpdate: ({ newIndex, oldIndex }) => {
        const $li = el.children[newIndex]
        const $oldLi = el.children[oldIndex]
        // 先删除移动的节点
        el.removeChild($li)
        // 再插入移动的节点到原有节点，还原了移动的操作
        if (newIndex > oldIndex) {
          el.insertBefore($li, $oldLi)
        } else {
          el.insertBefore($li, $oldLi.nextSibling)
        }
        // 更新items数组
        const targetRow = list.value.splice(oldIndex, 1)[0]
        list.value.splice(newIndex, 0, targetRow)
        // 下一个tick就会走patch更新
      },
      onEnd: (evt) => {
        endFun && endFun()
      }
    })
  })
  onBeforeUnmount(() => {
    if (sortInstance) {
      sortInstance.destroy()
      sortInstance = null
    }
  })
  return {
    listRef
  }
}
`

export default {
  name: 'FuncKeyValue',
  setup() {
    const mapping = ref([
      { key: '1', value: 'a' },
      { key: '2', value: 'b' },
      { key: '3', value: 'c' },
    ])
    const mappingJson = computed(() => JSON.stringify(mapping.value, null, 2))
    return {
      mapping,
      mappingJson,
      STR,
    }
  },
}
</script>
