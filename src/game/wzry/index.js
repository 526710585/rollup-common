import Common from '../../core/index';

class Wzry extends Common {
  constructor() {
    super();
    this.name = 'hpyj';
    this.init();
  }
  init() {
    console.log(`my name :${this.name}`);
  }
}

export default new Wzry();
