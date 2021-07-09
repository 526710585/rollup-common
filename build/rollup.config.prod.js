const getconf = require('./methods/getconf')
const baseRollupConfig = require('./rollup.config.base');
import { terser } from 'rollup-plugin-terser'
const rollupConfig = getconf(baseRollupConfig, {
  plugins: [terser()]
});
module.exports =   rollupConfig;