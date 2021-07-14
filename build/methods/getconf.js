const path = require('path');
const getFilesName = require('./getFilesName');
const {configArr,configObj} = require('../config/config');
const margeArrConfig = require('./margeConfig')
const { merge } = require('webpack-merge');

function getconf(baseConfig,setConfig){
  // 获取目录
  const fileArr = getFilesName(path.resolve(__dirname, '../../src/game/'));
  console.log(fileArr);
  //分开环境版本以及目录   //设置entry  //设置output
  let setArr = []
  fileArr.forEach(item=>{
    configArr.forEach(subitem=>{
      const obj = {
        input:'',
        output:{},
      }
      obj.input = `./src/game/${item}/index.js`;
      obj.output.format = subitem.format;
      obj.output.name = configObj.name;
      obj.output.file = `./dist/${item}/${item}.${configObj.name}.${subitem.name}.js`;
      // obj.output.path = path.resolve(__dirname, `../../dist/${item}`)
      setArr.push(obj)
    })
  })

  //合成配置
  let _baseConfig = baseConfig;
  if(setConfig){
    _baseConfig = merge(baseConfig,setConfig)
  }
  const returnArr = margeArrConfig(_baseConfig,setArr)
  //输出配置
  return returnArr;
}

module.exports = getconf