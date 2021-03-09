module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true,
    browser: true
  },
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never']
  },
  extends: ["eslint:recommended", "plugin:import/errors", "plugin:react/recommended"],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
