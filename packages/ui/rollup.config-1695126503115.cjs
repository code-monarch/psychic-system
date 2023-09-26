'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rollup = require('rollup');
var pluginBabel = require('@rollup/plugin-babel');
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('rollup-plugin-typescript2');
var styles = require('rollup-plugin-styles');
var terser = require('@rollup/plugin-terser');
var postcss = require('rollup-plugin-postcss');
var autoprefixer = require('autoprefixer');
var tailwind = require('tailwindcss');
var css = require('rollup-plugin-import-css');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var image = require('@rollup/plugin-image');
var dts = require('rollup-plugin-dts');

const packageJson = require("./package.json");

const external = [
  "module",
  "path",
  "typescript",
  "rollup",
  "react",
  "react-dom",
  "prop-types",
  "prop-types",
  // "/.css$/",
];

var rollup_config = rollup.defineConfig([
  {
    input: ["src/index.ts"],
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
        presets: ["@babel/preset-react"],
      }),
      peerDepsExternal(),
      resolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }), // tells Rollup how to find external deps in node_modules
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        plugins: [
          autoprefixer(),
          tailwind({
            config: "./tailwind.config.js",
          }),
        ],
      }),
      styles(),
      css(),
      terser(),

      image(),
    ],
    external, // telling rollup that anything in this array aren't part of type exports
  },
  {
    // path to your declaration files root
    input: ["src/index.ts"],
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts.default()],
  },
]);

exports.default = rollup_config;
