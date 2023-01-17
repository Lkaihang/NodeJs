/**
 *   使用文件系统，需要引入fs模块 
 *       同步文件的写入
 *         - 手动操作的步骤
 *         1. 打开文件
 *            fs.openSync(path, flags[, mode])
 *            -path 要打开的路径
 *            -flags 打开文件要做的操作类型
 *            r 只读
 *            w 只写
 *            -mode 设置文件的操作权限 ，一般不传
 *            返回值：
 *            -  该方法返回一个文件的描述符作为结果，我们可以通过该描述来对文件进行各种操作
 * 
 *         2. 向文件写入内容
 * 
 *               fs.writeSync(fd, string[, position[, encoding]])
 *                  -fd 文件的描述符
 *                  - string 要写入的内容
 *         3. 保存并关闭文件
 *                fs.close(fd)
 */