import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import terser from "@rollup/plugin-terser";

// To handle css files
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import css from "rollup-plugin-import-css";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";
import dts from "rollup-plugin-dts";

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

export default defineConfig([
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
      babel({
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
