const configArr = [
  {
    format:'umd',
    name:'umd'
  },
  {
    format:'cjs',
    name:'common'
  },
  {
    format:'esm',
    name:'browser'
  },
  {
    format:'es',
    name:'esm'
  }
]
const configObj = {
  library:'common'
}
module.exports = {configArr,configObj}