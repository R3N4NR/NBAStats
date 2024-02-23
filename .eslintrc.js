module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['import', 'react'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};
