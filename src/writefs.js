/*
 * @Author: Tiny
 * @Date: 2019-05-21 17:04:33
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 17:13:21
 */
'use strict';
let fs = require('fs');
let data = 'Hello, Node.js';

// 写文件
fs.writeFile('../README.md', data, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
})

// stat 获取文件信息
fs.stat('../README.md', (err, stat) => {
  if (err) {
    console.log(err);
  } else {
    console.log('isFile:' + stat.isFile());
    console.log('isDirectory:' + stat.isDirectory());
    if (stat.isFile()) {
      console.log('size:' + stat.size);
      console.log('birth time:' + stat.birthtime);
      console.log('modified time:' + stat.mtime);
    }
  }
})