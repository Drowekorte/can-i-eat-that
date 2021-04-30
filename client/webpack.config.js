module.exports = {
    mode: "development",
    entry: "./API.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    devServer: {
      contentBase: "./"
    }
  };