/**
 * 流式文件读取适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

const fs = require('fs');

//创建一个可读流
const rs = fs.createReadStream('hello3.txt');
//创建一个可写流
const ws = fs.createWriteStream("hello4.txt");

rs.once('open',() =>{
  console.log("可读流打开");
})

rs.once('close', () =>{
  console.log("可读流关闭")
  ws.end();
})

ws.once('open',() =>{
  console.log("可写流打开");
})

ws.once('close', () =>{
  console.log("可写流关闭")
})

//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，自动开始读取

rs.on("data",(data) =>{
  ws.write(data);
})

//也可以通过管道读取
//rs.pipe(ws);