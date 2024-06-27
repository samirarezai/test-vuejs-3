import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import vuetify from 'vite-plugin-vuetify'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),vuetify(), viteTsconfigPaths()],
    server: {
        port: 5000,
    },
})
