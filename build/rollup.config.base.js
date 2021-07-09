const resolve  = require('rollup-plugin-node-resolve');

module.exports =  {
  input: './src/game/wzry/index.js',
  output: {
    file: './dist/wzry/common.umd.js',
    format: 'umd',
    name:'common'
  },
  plugins: [ resolve() ]
}