module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'no-var': 2, //对var禁止
    eqeqeq: 2, // 警告使用全等
    'no-func-assign': 2, //禁止重复的函数声明
    // 'no-trailing-spaces': 1, //一行结束后面有空格就发出警告
    'no-underscore-dangle': 1, //标识符不能以_开头或结尾
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
