<template>
  <div class="demo-wrap">
    <div class="legend">
      <div v-for="(val, key) in LIBRAY_MAP" :key="key" class="item">
        <div class="box" :style="{ backgroundColor: COLOR_MAP[key] }">
          <img :src="ICON_MAP[key]"/>
        </div>
        <span class="title">
          {{ val }}
        </span>
      </div>
    </div>
    <div class="container" id="G6Demo01"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { mockData2 } from '../data'
import { getMockData, ICON_MAP, LIBRAY_MAP, COLOR_MAP } from './data'
import { Message } from 'f-ui-one'
import G6Creator from './G6Creator'

const props = defineProps({
  height: {
    type: Number,
    default: 600,
  },
})

const data = getMockData(mockData2.data)

function nodeClick(item) {
  let one = mockData2.data.nodeList.find(i => i.id === item.id)
  if (!one) return
  console.log(one)
  Message(`点击了 [${one.groupName}] 中的 [${one.name}]`)
}

let gc
onMounted(() => {
  gc = new G6Creator('G6Demo01', props.height, nodeClick)
  gc.render(data)
})

onBeforeUnmount(() => {
  if (gc) gc.destroy()
})
</script>

<style lang="stylus" scoped>
.demo-wrap {
  position: relative;
  .container {
    display: block;
    width: 100%;
    height: 100%;
  }
  .legend {
    position: absolute;
    top: 10px;
    left: 50%;
    width: 500px;
    height: 40px;
    transform: translateX(-50%);
    z-index : 1;
    .item {
      display: inline-flex;
      align-items: center;
      width: 25%;
      .box {
        display flex;
        align-items center;
        justify-content center;
        margin-right: 8px;
        width: 32px;
        height: 32px;
        border-radius 9px;
        > img {
          width: 16px;
          height: 16px;
        }
      }
      .title {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
      }
    }
  }
}
</style>
