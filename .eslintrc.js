// eslint-disable-next-line fp/no-mutation
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:fp/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['fp', 'import', 'jest', 'jsx-a11y', 'react', '@typescript-eslint'],
  // 0: off, 1: warn, 2: error
  rules: {
    'arrow-body-style': [1, 'as-needed'],
    'max-lines': [2, 200],
    'fp/no-arguments': 2,
    'fp/no-class': 1,
    'fp/no-delete': 2,
    'fp/no-get-set': 1,
    'fp/no-let': 2,
    'fp/no-loops': 1,
    'fp/no-mutating-assign': 2,
    'fp/no-mutating-methods': 2,
    'fp/no-mutation': 2,
    'fp/no-nil': 0,
    'fp/no-proxy': 2,
    'fp/no-rest-parameters': 0,
    'fp/no-this': 2,
    'fp/no-throw': 0,
    'fp/no-unused-expression': 0,
    'fp/no-valueof-field': 1,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/prefer-to-have-length': 1,
    'jest/valid-expect': 2,
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-unused-expressions': 2,
    'jest/no-mocks-import': 0,
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
  },
}
