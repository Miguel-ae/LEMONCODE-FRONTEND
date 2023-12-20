import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./index.ts",
        //appStyles: "./src/styles.css",
      },
      output: {
        filename: "[name].[chunkhash].js",
        clean: true,
      },
    module: {
        rules: [
          {   //ts
            test: /\.ts?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {  //sass
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
          {  //css
            test: /\.css$/,
            include: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(png|jpg|jpeg|avif)$/,
            type: "asset/resource",
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
        ],
    },
    devServer: {
        port: 8088,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin({
          filename: "[name].[chunkhash].css",
          chunkFilename: "[id].css",
        }),
    ],
};