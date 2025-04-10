module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature',
        'fix',
        'chore',
        'docs',
        'refactor',
        'test',
        'ci',
        'api',
        'ui',
        'style',
        'initial',
      ],
    ],
  },
};
