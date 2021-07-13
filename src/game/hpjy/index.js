import Common from '../../core/index';

class Hpjy extends Common {
  constructor() {
    super();
    this.name = 'hpjy';
    this.init();
  }
  init() {
    console.log(`my name :${this.name}`);
    console.log([1, 2, 3, 4].includes(1));
  }
}

export default new Hpjy();
