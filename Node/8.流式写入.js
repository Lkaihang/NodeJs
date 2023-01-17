/**
 * 同步，异步，简单文件的写入都不适用于大文件的写入，性能差， 容易导致内存溢出
 */

const fs = require('fs');

//流式文件写入
//创建一个可写流
/**
 * fs.createWriteStream(path[, options])
 *  -可以创建一个可写流
 *  - path 文件路径
 *  - options 配置的参数
 */
const ws = fs.createWriteStream('hello3.txt');
//可以通过open和close事件来监听
ws.once("open", ()=>{
  console.log("打开");
})
ws.once("close",()=>{
  console.log("关闭")
})
ws.write('hahahaha');
ws.write('123');
ws.write('abc');
ws.write('xyz');

//关闭流
ws.end();