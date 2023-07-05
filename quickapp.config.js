const path = require("path");

module.exports = {
  cli: {
    devtool: "none",
  },
  webpack: {
    resolve: {
      alias: {
        "@fastly": path.resolve(__dirname, "src/fastly-ui"),
        "@component": path.resolve(__dirname, "src/components"),
      },
      modules: ["./src/fastly-ui"],
    },
  },
};