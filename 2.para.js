var async = require('./async');
/**
 * 用于处理控制异步流程
 * 并行 所有的任务同时开始执行，
 * 当所有的任务都执行完毕之后才会调用回调函数、
 * 和 promise。all  有点相似 控制一步的流程的
 * */
console.time('cost');
async.parallel({
   one:function(cb){
      setTimeout(function(){
          cb(null,1);// attr null ,1
      },3000);
   },
   two:function(cb){
       setTimeout(function(){
           cb(null,2);
       },1000);
   }
},function(err,result){
    console.timeEnd('cost');
    console.log(result);
})
