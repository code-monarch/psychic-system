import { defineConfig } from "rollup";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const external = [
  "module",
  "path",
  "typescript",
  "rollup",
  "react",
  "react-dom",
  "prop-types",
  "prop-types",
  "/.css$/",
];

const packageJson = require("./package.json");

export default defineConfig([
  {
    input: "./src/index.ts",
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
      // peerDepsExternal(),
      resolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      terser(),
    ],
    external, // telling rollup anything that is in this array aren't part of type exports
  },
]);
