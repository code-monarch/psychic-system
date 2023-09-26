'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rollup = require('rollup');
var pluginBabel = require('@rollup/plugin-babel');
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('rollup-plugin-typescript2');
var styles = require('rollup-plugin-styles');
var postcss = require('rollup-plugin-postcss');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var image = require('@rollup/plugin-image');

const packageJson = require("./package.json");

var rollup_config = rollup.defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      // exports: "named",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      // exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    pluginBabel.babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      // presets: ["@babel/preset-react"],
    }),
    peerDepsExternal(),
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    styles(),

    image(),
  ],
  external: ["react", "react-dom", "prop-types", "prop-types", "/.css$/"], // telling rollup anything that is .css aren't part of type exports
});

exports.default = rollup_config;
