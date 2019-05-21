/*
 * @Author: Tiny
 * @Date: 2019-05-21 16:25:43
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-21 16:45:03
 */
process.nextTick(()=> {
  console.log('nextTick callback!');
})
console.log('nextTick was set!');

process.on('exit', code => {
  console.log('about to exit with code:' + code);
})

if (typeof (window) === 'undefined') {
  console.log('node.js');
} else {
  console.log('browser');
}