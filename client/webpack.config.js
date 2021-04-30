module.exports = {
    mode: "development",
    entry: "./recipes.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    devServer: {
      contentBase: "./"
    }
  };