/**
 * 同步，异步，简单读取
 * readSync(path[, options])
 * readFile(path[, options], callback)
 * 
 */

const fs = require('fs');

fs.readFile('./hello3.txt', (err, data) =>{
  if(!err){
    console.log(data);
  }
})