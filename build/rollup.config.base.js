import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from "rollup-plugin-eslint";

export default {
  input: './src/game/wzry/index.js',
  output: {
    file: './dist/wzry/common.umd.js',
    format: 'umd',
    name:'common'
  },
  plugins: [
    eslint(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',// 防止打包node_modules下的文件
      runtimeHelpers: true,
    })
  ]
}