const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const postcssPresetEnv = require("postcss-preset-env");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";
const { version, name, description } = require("../package.json");
const distDir = path.join(process.cwd(), "dist");

module.exports = {
  mode: "production",
  entry: { [name]: "./components/index.js" },
  output: {
    path: distDir,
    filename: "[name].min.js",
    // 采用通用模块定义
    libraryTarget: "umd",
    library: name
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.md$/,
        use: "raw-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // 编译css
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                postcssPresetEnv({
                  stage: 3,
                  features: {
                    "custom-properties": true,
                    "nesting-rules": true
                  },
                  browsers: "last 2 versions"
                })
              ]
            }
          }
        ]
      },
      {
        // 编译less
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                postcssPresetEnv({
                  stage: 3,
                  features: {
                    "custom-properties": true,
                    "nesting-rules": true
                  },
                  browsers: "last 2 versions"
                })
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    enforceExtension: false,
    extensions: [".js", ".jsx", ".json", ".less", ".css"]
  },
  // 注意：本地预览的时候要注释，否则报 require undefined
  // https://stackoverflow.com/questions/45818937/webpack-uncaught-referenceerror-require-is-not-defined
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [distDir]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.BannerPlugin(` \n ${name} v${version} \n ${description} ${fs.readFileSync(path.join(process.cwd(), "LICENSE"))}`)
  ],
  //压缩js
  optimization: {
    minimizer: [
      new TerserPlugin({ cache: true, parallel: true, sourceMap: true }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css\.*(?!.*map)/g, //注意不要写成 /\.css$/g
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          //生成.css.map 文件
          map: true,
          discardComments: { removeAll: true },
          safe: true,
          autoprefixer: false
        },
        canPrint: true
      })
    ]
  }
};
