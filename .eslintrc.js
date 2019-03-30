module.exports = {
  extends: 'qb',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  globals: {
    tf: false,
    tfvis: false,
    mobilenet: false,
    knnClassifier: false,
  },
  rules: {
    'no-magic-numbers': ['off'],
    'id-blacklist': ['off'],
    'id-length': ['off'],
    'no-sync': ['off'],
    'no-console': ['off'],
    'max-len': ['warn', 150],
  }
};
