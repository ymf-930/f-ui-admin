<template>
  <page-wrapper desc="不同样式的关系图">
    <div class="panel">
      <f-tabs v-model="activeTab" :data="tabs" type="card"></f-tabs>
      <div class="content-box">
        <Demo1 v-if="activeTab === 'tab1'" />
        <Demo2 v-if="activeTab === 'tab2'" />
        <Demo3 v-if="activeTab === 'tab3'" />
      </div>
    </div>
  </page-wrapper>
</template>

<script setup>
import { ref } from 'vue'
import Demo1 from './demo1/demo1.vue'
import Demo2 from './demo2/demo2.vue'
import Demo3 from './demo3/demo3.vue'

const activeTab = ref('tab1')
const tabs = ref([
  { key: 'tab1', title: '数据链路' },
  { key: 'tab2', title: '数据分组' },
  { key: 'tab3', title: '数据库概览' },
])
</script>

<style lang="stylus" scoped>
.panel {
  .content-box {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #e4e7ed;
    border-top: none;
    > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
