<template>
  <page-container>
    <f-collapse-wrap title="svg css 描边动画" shadow="none" class="mb-16">
      <div class="p10">
        <Demo1 />
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="svg css 蒙版动画" shadow="none" class="mb-16">
      <div class="p10">
        <Demo2 />
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="svg smil 动画" shadow="none" class="mb-16">
      <div class="p10">
        <Demo3 />
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Anime.js 基本知识" shadow="none" class="mb-16">
      <div class="p10">
        <Demo4 />
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Anime.js svg描边" shadow="none" class="mb-16">
      <div class="p10">
        <Demo5 />
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
import Demo5 from './demo5.vue'
</script>
