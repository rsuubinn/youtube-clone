const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BASE_JS = "./src/client/js/";

module.exports = {
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  watch: true,
  // 변경할 파일 경로
  entry: {
    main: BASE_JS + "main.js",
    videoPlayer: BASE_JS + "videoPlayer.js",
    recorder: BASE_JS + "recorder.js",
    commentSection: BASE_JS + "commentSection.js",
  },
  output: {
    filename: "js/[name].js", // 변경 후 파일 이름
    path: path.resolve(__dirname, "assets"), // 저장할 경로
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        // 로더는 역순으로 실행
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
