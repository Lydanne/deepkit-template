const typeCompiler = require("@deepkit/type-compiler");
const hq = require("alias-hq");
const nodeExternals = require("webpack-node-externals");

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
  externals: [nodeExternals()],
  externalsType: "commonjs",
  resolve: {
    extensions: [".tsx", ".ts"],
    alias: hq.get("webpack"),
  },
  target: "node16",
};
