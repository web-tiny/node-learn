/*
 * @Author: Tiny
 * @Date: 2019-05-21 17:43:25
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 17:48:17
 */
'use strict';
let http = require('http');
let server = http.createServer((req, res) => {
  console.log(req.method + ':' + req.url);
  res.writeHead(200, {
    'Content-type': 'text/html'
  });
  res.end('<h1>Hello world</h1>')
})
server.listen(8080);
console.log('Server is running at http: // 127.0.0.1:8080');