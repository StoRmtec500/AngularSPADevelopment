const path = require("path");

//CSS Bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Hot Reload
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src/index.ts"),
  devtool: "inline-source-map",
  // devServer: {
  //   contentBase: "./dist",
  //   hot: true
  // },
  // plugins: [
  //   new CleanWebpackPlugin(["dist"]),
  //   new HtmlWebpackPlugin({
  //     title: "Hot Module Replacement"
  //   }),
  //   new webpack.NamedModulesPlugin(),
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      name: false,

      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
};
