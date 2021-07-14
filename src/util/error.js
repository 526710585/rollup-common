export let warn = function () {};

if (process.env.NODE_ENV !== 'production') {
  const hasConsole = typeof console !== 'undefined';
  warn = (msg = '', name = '') => {
    if (hasConsole) {
      console.error(`[${name} warn]: ${msg}`);
    }
  };
}
