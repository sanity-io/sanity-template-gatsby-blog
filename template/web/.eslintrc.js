module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Disable prop-type warnings for demo convenience
    'react/prop-types': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4',
    },
  },
}
