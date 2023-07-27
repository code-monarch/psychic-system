import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";

// To handle css files
import postcss from "rollup-plugin-postcss";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";

const packageJson = require("./package.json");

export default defineConfig({
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
    babel({
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
