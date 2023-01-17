/**
 *     异步文件写入
 * 
 *     fs.open(path, flags[, mode], callback)
 *     - 用来打开一个文件
 *       异步调用的方法， 结果都是通过回调函数的参数返回的
 *      err
 *      fd 文件的描述符
 *     
 *      fs.write(fd, '', callback)
 * 
 * 
 */
const fs = require('fs');

fs.open('hello.txt', 'w', function(err, fd){
  if(!err){
    //文件的写入
    fs.write(fd, 'hello world!', function(err){
      if(!err){
        console.log('写入成功！');
      }

      //关闭文件
      fs.close(fd, function(err){
        if(!err){
          console.log("文件关闭");
        }
      })
    })
  }
})