const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const PugPlugin = require('pug-plugin');

const postcssReporter = require('postcss-reporter');
const postcssSCSS = require('postcss-scss');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const doiuse = require('doiuse');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.pug',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png'], // теперь можно писать import '../jsFile' без .js в конце
    // (но на самом деле это стандартная конфигуряция для .js)
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    open: true,
    port: 4200,
    hot: isDev,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
        // {
        //   from: path.resolve(__dirname, 'src/assets/'),
        //   to: path.resolve(__dirname, 'dist/assets/'),
        // },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new PugPlugin({
      css: {
        // output filename of CSS files
        filename: '[name].[contenthash:8].css',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        // include: [
        //   path.resolve(__dirname, "not_exist_path")
        // ],
        use: [
          // 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/images/[name].[hash:8][ext][query]',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name].[hash:8][ext][query]',
        },
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // PugPlugin already contain the pug-loader
        options: {
          method: 'render', // fastest method to generate static HTML files
        },
      },
    ],
  },
};
