<template>
  <header-trigger icon="setting" @click="toggleSetting"></header-trigger>
  <!--设置抽屉-->
  <f-drawer :model-value="settingVisible" append-to-body @close="toggleSetting">
    <div class="setting-panel">
      <theme-panel />
      <h3 class="setting-title"><span>功能设置</span></h3>
      <div class="setting-list-item">
        <span>菜单宽度</span>
        <f-input-number
          size="small"
          :step="8"
          :min="200"
          :max="256"
          v-model="setting.sidebarWidth"
          style="width: 150px"
        ></f-input-number>
      </div>
      <!-- <div class="setting-list-item">
        <span>菜单固定</span>
        <f-switch v-model="setting.fixedAside">
          <template #open><span>开</span></template>
          <template #close><span>关</span></template>
        </f-switch>
      </div>
      <div class="setting-list-item">
        <span>头部固定</span>
        <f-switch v-model="setting.fixedHeader">
          <template #open><span>开</span></template>
          <template #close><span>关</span></template>
        </f-switch>
      </div> -->
      <div class="setting-list-item">
        <span>多页签</span>
        <f-switch :model-value="setting.tagsView" @change="toggleTagsView">
          <template #open><span>开</span></template>
          <template #close><span>关</span></template>
        </f-switch>
      </div>
      <div class="setting-list-item" v-if="setting.tagsView">
        <span>页签风格</span>
        <f-select v-model="setting.tagsType" size="small" style="width: 150px">
          <f-option label="卡片" value="card"></f-option>
          <f-option label="灵动" value="clever"></f-option>
          <f-option label="圆滑" value="smooth"></f-option>
        </f-select>
      </div>
      <div class="setting-list-item" v-if='setting.routerTransitionName'>
        <span>动画效果</span>
        <f-select v-model="setting.routerTransitionName" size="small" style="width: 150px">
          <f-option label="fade-in" value="fade-in"></f-option>
          <f-option label="fade-transverse" value="fade-transverse"></f-option>
          <f-option label="fade-scale" value="fade-scale"></f-option>
          <f-option label="fade-scale-move" value="fade-scale-move"></f-option>
          <f-option label="fade-down" value="fade-down"></f-option>
          <f-option label="zoom-in" value="zoom-in"></f-option>
          <f-option label="zoom-in-center" value="zoom-in-center"></f-option>
          <f-option label="move-left" value="move-left"></f-option>
          <f-option label="move-right" value="move-right"></f-option>
        </f-select>
      </div>
      <h3 class="setting-title"><span>顶栏设置</span></h3>
      <div class="setting-list-item">
        <span>菜单折叠</span>
        <f-switch v-model="setting.showCollapse">
          <template #open><span>开</span></template>
          <template #close><span>关</span></template>
        </f-switch>
      </div>
      <div class="setting-list-item">
        <span>菜单搜索</span>
        <f-switch v-model="setting.showSearch">
          <template #open><span>开</span></template>
          <template #close><span>关</span></template>
        </f-switch>
      </div>
      <div class="setting-list-item">
        <span>消息通知</span>
        <f-switch v-model="setting.showMessage">
          <template #open><span>开</span></template>
          <template #close><span>关</span></template>
        </f-switch>
      </div>

      <div class="setting-list-item">
        <span>城市天气</span>
        <f-switch v-model="setting.showWeather">
          <template #open><span>开</span></template>
          <template #close><span>关</span></template>
        </f-switch>
      </div>
    </div>
  </f-drawer>
</template>

<script>
import HeaderTrigger from '@/layouts/header-trigger/index.vue'
import useApp from '@/hooks/store/useApp'
import ThemePanel from './theme-panel.vue'

export default {
  name: 'Setting',
  components: { ThemePanel, HeaderTrigger },
  setup() {
    const { setting, settingVisible, toggleSetting, toggleTagsView } = useApp()
    return {
      setting,
      settingVisible,
      toggleSetting,
      toggleTagsView,
    }
  },
}
</script>

<style lang="stylus" scoped>
// 主题弹窗样式
.setting-panel {
  padding: 0 4px;
  .setting-title {
    position: relative;
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background-color: #eeeeee;
    > span {
      position: absolute;
      background-color: #fff;
      padding: 0 12px;
      font-weight: 500;
      color: #303133;
      font-size: 15px;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  .setting-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }
}
</style>
