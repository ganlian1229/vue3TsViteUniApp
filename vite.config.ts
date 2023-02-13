import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        uni(),
        AutoImport({
            imports: ['vue', 'pinia', 'uni-app'], // 需要自动导入
            dts: 'src/auto-imports.d.ts',
            // // 生成全局声明文件，给eslint用
            eslintrc: {
                enabled: true, // Default `false`
                filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // charset: false, // 避免出现: build时的 @charset 必须在第一行的警告
                additionalData: `@import "uview-plus/theme.scss";@import "uview-plus/index.scss";`
            }
        }
    }
});
