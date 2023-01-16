/**
 * 引入其他的模块
 *   在node中，通过require()函数来引入其他模块
 *   这里路径必须以./ 或 ../开头
 *      使用require 引入其他模块后，返回一个对象，这个对象代表的是引入的模块
 */

const m = require('./2.01module');
console.log(m.x);