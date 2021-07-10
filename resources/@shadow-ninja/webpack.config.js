const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: path.join(__dirname, 'src', 'app.js'),
    index: path.join(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  devServer: { contentBase: path.join(__dirname, 'src') },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    alias: {
      react: path.resolve('./node_modules/react'),
      components: path.resolve(__dirname, 'src/'),
    },
  },
}
