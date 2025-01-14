export default [
  {
    path: 'pivotDemo',
    name: 'PivotDemo',
    component: () => import('@/views/demo/graph/pivot-demo/index.vue'),
    meta: { title: '交叉表' },
  },
  // {
  //   path: 'funcGraphviz',
  //   name: 'FuncGraphviz',
  //   component: () => import('@/views/demo/graph/func-graphviz.vue'),
  //   meta: { title: 'dot graphviz' },
  // },
  // {
  //   path: 'funcX6',
  //   name: 'FuncX6',
  //   component: () => import('@/views/demo/graph/func-x6.vue'),
  //   meta: { title: '阿里X6示例' },
  // },
  {
    path: 'easyflow',
    name: 'EasyFlow',
    component: () => import('@/views/demo/graph/easy-flow/index.vue'),
    meta: { title: 'easy-flow' },
  },
  {
    path: 'CanvasDemo',
    name: 'CanvasDemo',
    component: () => import('@/views/demo/graph/canvas-demo/index.vue'),
    meta: { title: 'canvas绘图' },
  },
  {
    path: 'SvgDemo',
    name: 'SvgDemo',
    component: () => import('@/views/demo/graph/svg-demo/index.vue'),
    meta: { title: 'Svg基础' },
  },
  {
    path: 'GraphSchemaDemo',
    name: 'GraphSchemaDemo',
    component: () => import('@/views/demo/graph/schema-demo/schema-demo.vue'),
    meta: { title: '画布框选' },
  },
  {
    path: 'GraphChartsMap',
    name: 'GraphChartsMap',
    component: () => import('@/views/demo/graph/charts-map/index.vue'),
    meta: { title: '关系图' },
  },
]
