<template>
  <div class="page-header">
    <div class="page-header-title">工作台</div>
    <div class="page-header-detail">
      <div class="avatar-img">
        <img src="@/assets/images/avatar/avatar05.jpeg" class="avatar" alt="avatar" />
      </div>
      <div class="welcome">
        <div class="welcome-title">{{ welcomeTitle }}</div>
        <div class="welcome-weather">
          <span>{{ currentDate }}</span>
          <f-divider type="vertical" />
          <f-space v-if="setting.showWeather">
            <i :class="`qi-icon qi-${weather.icon}`" :title="weather.text"></i>
            <span>{{ weather.temp }}°</span>
            <span>{{ weather.text }}</span>
            <span>{{ weather.windDir }} {{ weather.windScale }}级</span>
          </f-space>
        </div>
        <div class="pt-10">
          <f-tag>搬砖者 👐</f-tag>
          <f-tag>小有想法 😈</f-tag>
          <f-tag>前端开发 ⛲</f-tag>
          <f-tag>vue3 🍀</f-tag>
          <f-tag>专注前端 🌟</f-tag>
          <f-tag>菜鸟 🙋</f-tag>
          <f-tag>懂点设计 💎</f-tag>
          <f-tag>交互内容 🔖</f-tag>
        </div>
      </div>
      <div class="right-box">
        <div class="item">
          <div class="top">
            <iconfont icon="block" color="primary" bg round></iconfont>
            <span class="ml-5">项目数</span>
          </div>
          <p>5</p>
        </div>
        <div class="item">
          <div class="top">
            <iconfont icon="check-square" color="warning" bg round></iconfont>
            <span class="ml-5">代办项</span>
          </div>
          <p>{{ todoLabel }}</p>
        </div>
        <div class="item">
          <div class="top">
            <iconfont icon="bell" color="success" bg round></iconfont>
            <span class="ml-5">通知数量</span>
          </div>
          <p>2</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useApp from '@/hooks/store/useApp'
import { useStore } from '@/store'

export default {
  name: 'top-box',
  setup() {
    const { todolistStore, userStore, storeToRefs } = useStore()
    const { todoLabel } = storeToRefs(todolistStore)
    const { welcomeTitle, currentDate } = storeToRefs(userStore)
    const { weather, setting } = useApp()

    return {
      welcomeTitle,
      currentDate,
      todoLabel,
      weather,
      setting,
    }
  },
}
</script>

<style scoped lang="stylus">
@import "../../../assets/stylus/base/var.styl"
.page-header {
  padding: 16px 32px 0 32px;
  background: #fff;
  border-bottom: $border-base
  &-title {
    display: inline-block;
    color: $color-text-primary;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 16px;
  }
  &-detail {
    display: flex;
    margin-bottom: 16px;
    .avatar-img {
      .avatar {
        width: 64px;
        border-radius: 50%;
        font-size: 0;
        box-shadow: 0 0 2px rgba(0, 0, 0, .1);
      }
    }
    .welcome {
      flex: 1;
      padding: 0 24px;
      &-title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 12px;
      }
      &-weather {
        color: $color-text-secondary;
      }
    }
    .right-box {
      width: 320px;
      justify-content: space-between;
      display: flex;
      .item {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100px;
        text-align: right;
        .top {
          display: flex;
          align-items: center;
          color: #808695;
        }
        p {
          font-size: 22px;
          line-height: 32px;
        }
      }
    }
  }
}
</style>
