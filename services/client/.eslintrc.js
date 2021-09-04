module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'no-unreachable': 1,
    'no-unreachable-loop': 1,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'semi': [
      'error',
      'never'
    ],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
