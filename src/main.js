import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { registerDirectives } from '@/directives'
import { registerUI } from '@/plugins/f-ui-one'
import { registerCharts } from '@/plugins/bin-charts-next'
import { registerEditor } from '@/plugins/fei-editor'
import { registerCommonComps } from '@/components/Common/index'
import 'f-ui-one/lib/styles/normalize.css' // 初始化样式
import 'f-ui-one/lib/styles/scrollbar.css' // 滚动条样式
import 'f-ui-one/lib/styles/index.css' // 组件库样式
import '@/assets/stylus/index.styl' // 项目样式

/**
 * mock 模块
 * 注意：线上版本需要首先移除mock模块再进行调试，切记切记！！！
 */
// if (process.env.NODE_ENV !== 'production') {
// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
import './mock'
// }

const app = createApp(App)
registerDirectives(app)
registerUI(app)
registerCharts(app)
registerEditor(app)
setupRouter(app)
setupStore(app)
registerCommonComps(app)
// Mount when the route is ready
router.isReady().then(() => {
  app.mount('#app', true)
})
