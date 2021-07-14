import Common from '../../core/index';
import MobileDetect from 'mobile-detect';
class Wzry extends Common {
  constructor() {
    super();
    this.name = 'wzry';
    this.init();
  }
  init() {
    console.log(`${this.name}-Common.js ———— 启用`);
    this.getCellOS();
  }
  getCellOS() {
    if (!MobileDetect) {
      this.warn('请安装mobile-detect后 获取参数', this.name);
      return;
    }
    const deviceType = navigator.userAgent; // 获取userAgent信息
    const md = new MobileDetect(deviceType); // 初始化mobile-detect
    console.log(md);
  }
}

export default new Wzry();
