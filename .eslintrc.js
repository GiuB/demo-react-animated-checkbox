module.exports = {
  env: {
    es2020: true,
  },
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
}
