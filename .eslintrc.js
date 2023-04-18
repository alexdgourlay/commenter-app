module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: [
    "eslint-plugin-tsdoc",
  ],
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/known-type-names': 'error',
      },
    },
    {
      files: ['*.tsx', '*.ts'],
      processor: '@graphql-eslint/graphql',
    },
  ],
};
