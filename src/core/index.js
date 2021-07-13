class Common {
  constructor() {

  }
  /**
   *
   * @param {*} val 获取url参数的key
   * @returns 用于获取单个url参数
   */
  getUrlParam(val) {
    const reg = new RegExp(`(^|&)${val}=([^&]*)(&|$)`); // 构造一个含有目标参数的正则表达式对象
    const r = window.location.search.substr(1).match(reg); // 匹配目标参数
    if (r !== null) return unescape(r[2]);
    return null; // 返回参数值
  }
  isMSDK() {
    const ua = navigator.userAgent;
    return /MSDK\//.test(ua);
  }
  getNowDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }
  /**
   *
   * @param {*} fun 触发的事件
   * @param {*} waitTime 节流的时间
   * @param {*} call 节流期间的回调
   * @returns 节流函数
   */
  throttle(fun, waitTime, call) {
    let oneSwitch = true;
    if (call === undefined) {
      call = function () {};
    }
    return function () {
      if (oneSwitch) {
        oneSwitch = false;
        fun();
        setTimeout(() => {
          oneSwitch = true;
        }, waitTime);
      } else {
        call();
      }
    };
  }
  /**
   *
   * @param {*} fun 触发的事件
   * @param {*} waitTime 防抖的时间
   * @returns 防抖函数
   */
  debounce(fun, waitTime) {
    let timeId = null;
    if (waitTime === undefined) {
      waitTime = 500;
    }
    return function () {
      clearTimeout(timeId);
      timeId = setTimeout(() => {
        fun();
      }, waitTime);
    };
  }
}

export default Common;
