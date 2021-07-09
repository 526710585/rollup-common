process.env.NODE_ENV = 'testProduction';
const getconf = require('./methods/getconf')
const baseRollupConfig = require('./rollup.config.base');

const rollupConfig = getconf(baseRollupConfig, {

});
module.exports =   rollupConfig;