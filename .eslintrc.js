module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    //'plugin:react/recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true,
    // },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // plugins: [
  //   'react',
  // ],
  rules: {
    // comma dangle
    "comma-dangle": 0,
    // indent with 4 spaces
    "indent": ["error", 4],
    // comment max length
    "max-len": ["error", { "code": 200 }],
    // no-console
    "no-console": 1
  },
};
