// commitlint.config.js
module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feature', // new feature
        'fix', // bug fix
        'chore', // tooling, maintenance
        'docs', // documentation
        'refactor', // code restructuring
        'test', // test-related
        'ci', // CI/CD pipeline
        'api', // API changes
        'ui', // frontend/UI updates
        'style', // UI Update
        'initial', // Initial Commit
      ],
    ],
  },
};
