module.exports = {
    env: {
        browser: true, // 启用浏览器全局变量。
        node: true, // Node.js全局变量和Node.js范围。
        es6: true // 启用ES6的功能。
    },
    globals: {
        uni: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        './.eslintrc-auto-import.json',
        '@types/uni-app'
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser', // 解析器（parser）
        ecmaVersion: 2020, // ECMA版本
        sourceType: 'module' // 指定源代码存在的位置，script | module，默认为script
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        'vue/multi-word-component-names': 'off', //关闭组件命名规则
        'vue/no-v-model-argument': 'off', // 在vue3中使用v-model报错
        'array-bracket-spacing': 'off', // 是否允许非空数组里面有多余的空格
        'object-curly-spacing': 'off', // 大括号内是否允许不必要的空格
        'prettier/prettier': 'off',
        'space-before-function-paren': 'off', // 函数定义时括号前面要不要有空格
        'no-console': 'off', // 禁止使用console
        'no-debugger': 'off', // 禁止使用debugger
        'no-empty-source': 'off',
        indent: ['warn', 4], // 使用四个空格进行缩进，
        'no-unused-vars': 'off' // 不能有声明后未被使用的变量或参数
    }
};
