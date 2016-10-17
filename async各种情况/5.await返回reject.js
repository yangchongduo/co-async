//重点: 就是 不能有return 成功的必须有return  reject 的话只有await是不需要return
async function f() {
    await Promise.reject('出错了');
}
async function f() {
    return await Promise.resolve('出错了');
}
//这个必须有return
async function f() {
    return Promise.reject('我是reject 必须有reject')
}
async function f() {
    return Promise.resolve('成功了')
}
async function f() {
    throw new Error('我是直接throw new ERROR')
}
//以下两种方法都可以
/*f()
 .then(v => console.log(v))
 .catch(e => console.log(e))*/

f().then(v=>console.log(v), e=>console.log(e))