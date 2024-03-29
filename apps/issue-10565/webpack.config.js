const path = require('path');
module.exports = (config, context) => ({
  ...config,
  experiments: {
    ...config.experiments,
    outputModule: true,
    topLevelAwait: true,
  },
  entry: './apps/issue-10565/src/main.ts',
  output: {
    path: path.resolve(__dirname, '../../dist/apps/issue-10565'),
    chunkFormat: 'module',
    library: {
      type: 'module',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
})
