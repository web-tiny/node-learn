/*
 * @Author: Tiny
 * @Date: 2019-05-21 17:54:49
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 18:05:19
 */
'use strict';
let fs = require('fs');
let url = require('url');
let path = require('path');
let http = require('http');

let root = path.resolve(process.argv[2] || '.')

console.log('Static root dir:' + root);

let server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  
  let filepath = path.join(root, pathname);
  
  fs.stat(filepath, (err, stats) => {
    if (!err && stats.isFile()) {
      console.log('200' + req.url);
      res.writeHead(200);
      fs.createReadStream(filepath).pipe(res)
    } else {
      console.log('404'+ req.url);
      res.writeHead(404);
      res.end('404 Not Found');
    }
  })
})

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');