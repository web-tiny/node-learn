/*
 * @Author: Tiny
 * @Date: 2019-05-21 16:47:29
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 17:03:26
 */
'use strict';
let fs = require('fs');
fs.readFile('../README.md', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

/** 
 * 读取二进制文件，不传入文件编码时，回调函数的data参数将返回一个Buffer对象
*/
fs.readFile('./img/girl.jpg', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
    console.log(data.length + 'bytes');
  }
})

try {
  const data = fs.readFileSync('./img/girl.jpg', 'utf-8')
  console.log(data)
} catch (error) {
  console.log(error);
}