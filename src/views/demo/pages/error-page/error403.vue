<template>
  <div class="system-error-page">
    <div class="fei-result">
      <div class="fei-result-icon fei-result-image">
        <img src='../../../../assets/images/default/auth.svg' alt="403">
      </div>
      <div class="fei-result-title">{{ status }}</div>
      <div class="fei-result-subtitle">{{ errorMessage }}</div>
      <div class="fei-result-extra">
        <f-space>
          <f-button background @click="$router.back()">返回上级</f-button>
          <router-link :to="{path:HOME_PATH}">
            <f-button type="primary">返回首页</f-button>
          </router-link>
        </f-space>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { HOME_PATH } from '@/router/menus'

export default {
  name: 'Error500',
  setup() {
    // 此代码根据ERROR_PATH_LIST错误路由列表映射而来，如后缀了message，query，则默认先显示对应错误
    const errorNormalMsg = {
      403: '抱歉，您无权访问此页面！',
      404: '抱歉，你访问的页面不存在！',
      500: '抱歉，服务器出错了！',
    }

    const status = ref(403)
    const errorMessage = ref('抱歉，您无权访问此页面！')

    return {
      status,
      errorMessage,
      HOME_PATH,
    }
  },
}
</script>

<style lang="stylus">
.system-error-page {
  .fei-result {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .fei-result-image {
    width: 400px;
    height: 340px;
  }
  .fei-result-title {
    margin-bottom: 24px;
    color: #17233d;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    opacity: 0;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  .fei-result-subtitle {
    margin-bottom: 24px;
    color: #808695;
    font-size: 16px;
    line-height: 22px;
    opacity: 0;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }
  .fei-result-extra {
    text-align: center;
    opacity: 0;
    animation-name: slideUp;
    animation-duration: 0.5s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }

}
@keyframes slideUp {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
