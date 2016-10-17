/**
 * Created by Weil on 16/6/25.
 */

//setTimeout()//第三个参数 是第一个函数的 参数
//下面的没有办法直接 run  需要到 1.html运行
async function asyncFunc (initValue) {
  let first = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'first-' + initValue);
  });

  let second = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second-' + first);
  });

  let third = await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'third-' + second);
  });
  return third;
}

asyncFunc('init')
  .then((value) => {
    console.log('asyncFuncRes: ', value);
  })
  .catch((error) => {
    console.log('asyncError: ', error);
  });

//下面是ok的
