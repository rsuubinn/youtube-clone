const path = require("path");

module.exports = {
  mode: "development",
  // 변경할 파일 경로
  entry: "./src/client/js/main.js",
  output: {
    filename: "main.js", // 변경 후 파일 이름
    path: path.resolve(__dirname, "assets", "js"), // 저장할 경로
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
    ],
  },
};
