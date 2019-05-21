/*
 * @Author: Tiny
 * @Date: 2019-05-21 17:25:05
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 17:31:49
 */
'use strict';
let fs = require('fs');

let rs = fs.createReadStream('../README.md', 'utf-8');

rs.on('data', chunk => {
  console.log('DATA:');
  console.log(chunk);
})

rs.on('end', () => {
  console.log('END');
})

rs.on('error', err => {
  console.log('ERROR' + err);
})

let wsl = fs.createWriteStream('../README.md', 'utf-8');
wsl.write('add content by using Stream...\n')
wsl.write('END');
wsl.end()