import { loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

// const proxyAddress = 'http://192.168.0.121:8850/'
// https://vitejs.dev/config/
export default ({ mode }) => {
  const dirRoot = process.cwd()

  const env = loadEnv(mode, dirRoot)
  const isProd = process.env.NODE_ENV === 'production'

  return defineConfig({
    base: process.env.NODE_ENV === 'production' ? env.VITE_PUBLIC_PATH : '',
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: tag => ['css-doodle'].includes(tag),
          },
        },
      }),
      copy({
        targets: [
          {
            src: './node_modules/libpag/lib/libpag.wasm',
            dest: isProd ? 'dist/' : 'public/',
          },
        ],
        hook: isProd ? 'writeBundle' : 'buildStart',
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 8085,
      open: true,
      proxy: {
        // '/auth': { target: proxyAddress },
      },
    },
    resolve: {
      alias: {
        '@': pathResolve('./src'),
      },
    },
    optimizeDeps: {
      include: [
        'axios',
        'vue',
        'vue-router',
        'pinia',
        'dayjs',
        'echarts',
        'f-ui-one',
        'js-cookie',
        'mockjs',
        'brace',
      ],
      exclude: [],
    },
    build: {
      sourcemap: false,
      outDir: 'docs',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('/node_modules/')) {
              // 设置需要独立打包的npm包
              const expansions = [
                'f-ui-one',
                'brace',
                'mockjs',
                'lodash-es',
                // 'd3',
                // 'd3-graphviz',
                // 'css-doodle',
                // '@antv/x6',
                // '@antv/x6-plugin-selection',
                // '@antv/x6-vue-shape',
              ]
              const c = expansions.find(exp => id.includes(`/node_modules/${exp}`))
              if (c) {
                return `chunk-${c}`
              } else {
                return 'vendor'
              }
            }
          },
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
  })
}
