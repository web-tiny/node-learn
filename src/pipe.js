/*
 * @Author: Tiny
 * @Date: 2019-05-21 17:35:31
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 17:37:01
 */
'use strict';
let fs = require('fs');

let rs = fs.createReadStream('../README.md')
let ws = fs.createWriteStream('./txt/sample.txt')

rs.pipe(ws)