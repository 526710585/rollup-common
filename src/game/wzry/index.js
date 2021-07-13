import Common from '../../core/index';

class Wzry extends Common {
  constructor() {
    super();
    this.name = 'wzry';
    this.init();
  }
  init() {
    console.log(`${this.name}-Common.js ———— 启用`);
  }
}

export default new Wzry();
