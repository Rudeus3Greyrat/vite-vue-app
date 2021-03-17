import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
const path=require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server:
        {
            port: 3001, // 开发环境启动的端口
            proxy: {
                '/api': {
                    // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
                    target: 'http://47.99.134.126:28019/api/v1',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
                }
            }
        },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './'), // 根路径
            '@': path.resolve(__dirname, 'src') // src 路径
        }
    }
})
