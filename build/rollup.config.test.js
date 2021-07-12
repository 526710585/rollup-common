process.env.NODE_ENV = 'testProduction';
const getconf = require('./methods/getconf')
// const baseRollupConfig = require('./rollup.config.base');
import baseRollupConfig from './rollup.config.base'

const rollupConfig = getconf(baseRollupConfig, {

});
export default rollupConfig;