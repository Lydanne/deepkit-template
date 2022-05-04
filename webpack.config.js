const typeCompiler = require("@deepkit/type-compiler");
const path = require("path");
const hq = require("alias-hq");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              //this enables @deepkit/type's type compiler
              getCustomTransformers: (program, getProgram) => ({
                before: [typeCompiler.transformer],
                afterDeclarations: [typeCompiler.declarationTransformer],
              }),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  externals: [/^@deepkit\/.+/],
  externalsType: "commonjs",
  resolve: {
    extensions: [".tsx", ".ts"],
    alias: hq.get("webpack"),
  },
  target: "node16",
};
