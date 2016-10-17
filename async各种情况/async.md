1.async函数返回一个Promise对象。
  async函数内部return语句返回的值，会成为then方法回调函数的参数。
          async function f() {
            return 'hello world';
          }

          f().then(v => console.log(v))
          // "hello world"
2.throw new Error('出错了');  不能有return 否则后面的都不会去执行
             async function f() {
               throw new Error('出错了');
             }
             f().then(
               v => console.log(v),
               e => console.log(e)
             )
            // Error: 出错了

3.await 不是promise就默认 直接return Promise.resolve();
                              retrun Promise.reject();
                              f().then(v=>console.log(v),e=>console.log(e));
                              f().catch(e=>console.log(e))
                 //以下就是 有错误 就没有 retrun  成功才有return
                async function f() {
                    await Promise.reject('出错了');
                }
                async function f() {
                    return await Promise.resolve('出错了');
                }

