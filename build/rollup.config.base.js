import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from "rollup-plugin-eslint";
import replace from 'rollup-plugin-replace';

export default {
  input: './src/game/wzry/index.js',
  output: {
    file: './dist/wzry/common.umd.js',
    format: 'umd',
    name:'common'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    eslint(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',// 防止打包node_modules下的文件
      runtimeHelpers: true,
    })
  ],
  external:["mobile-detect"]
}