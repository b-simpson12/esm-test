const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', // or 'production' for production mode
  entry: './apps/webpack-mod/src/main.ts', // Entry point of your Express application
  output: {
    path: path.resolve(__dirname, '../../dist/apps/webpack-mod'),
    filename: 'main.mjs',
    module: true,
    libraryTarget: 'module',
    chunkFormat: 'module',
    chunkFilename: 'main.mjs',
    library: {
      type: 'module',
    },
    environment: {
      module: true,
    },
  },
  node: {
    __dirname: 'node-module',
  },
  resolve: {
    extensions: ['.js', '.mjs', '.ts', '.mts'], // Support both .js and .mjs extensions for ESM
    extensionAlias: {
      '.js': ['.ts', '.js'],
      '.mjs': ['.mts', '.mjs'],
      '.cjs': ['.cts', '.cjs'],
    },
  },
  target: 'node', // Important for server-side applications
  externals: [nodeExternals({ importType: 'module' })], // Exclude node_modules from the bundle
  externalsPresets: {
    node: true,
  },
  module: {
    rules: [
      // Add any necessary loaders or rules here
      { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
    ],
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    // Add any necessary plugins here
  ],
};
