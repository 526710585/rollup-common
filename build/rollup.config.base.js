import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/game/wzry/index.js',
  output: {
    file: './dist/wzry/common.umd.js',
    format: 'umd',
    name:'common'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',// 防止打包node_modules下的文件
      runtimeHelpers: true,
    })
  ]
}