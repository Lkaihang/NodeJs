/**
 *  通过require 引入文件
 *      核心文件
 *        直接写名字 如fs
 *      模块文件
 *         以./ 或../开头
 *     在node中 有一个全局对象 global ， 它的作用和网页中的window类似
 *         在全局中创建的变量都会作为global的属性保存
 *         在全局中创建的函数都会作为global的方法保存
 */

/**
 *  arguments.callee
 *    这个属性保存的是当前执行的函数对象
 */
console.log(arguments);

/**
 * 当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
 *  function (exports, require, module, _filename, _dirname){
 * 在最底部添加如下
 * }
 * 
 *   1.   该对象用来将变量或函数暴露到外部
 *   2.   用来引入外部的模块
 *   3.   代表当前模块本身
 *        exports就是module的属性
 *        既可以用exports导出，也可以用module.exports导出
 * 
 *        exports只能使用.的方式向外暴露
 *        exports.xxx = xxx
 *        
 *        module.exports.xxx = xxx
 *        module.exports = {}
 *   4.   当前模块的完整路径
 *   5.   当前模块所在文件夹
 */