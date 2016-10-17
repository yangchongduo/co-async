//async函数返回一个Promise对象
async function f() {
    return 'hello world';
}
f().then(v => console.log(v));