module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', '@nx'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@nx/enforce-module-boundaries': [
      'error',
      {
        allow: [],
        depConstraints: [
          {
            sourceTag: 'type:entity',
            onlyDependOnLibsWithTags: ['type:entity'],
          },
          {
            sourceTag: 'type:service',
            onlyDependOnLibsWithTags: [
              'type:service',
              'type:entity',
            ],
          },
          {
            sourceTag: 'scope:appointment',
            onlyDependOnLibsWithTags: ['scope:appointment'],
          },
          {
            sourceTag: 'scope:doctor',
            onlyDependOnLibsWithTags: ['scope:doctor'],
          },
          {
            sourceTag: 'scope:patient',
            onlyDependOnLibsWithTags: ['scope:patient'],
          },
        ],
      },
    ],
  },
};
