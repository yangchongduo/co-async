// 现在是 await 不是promise 就不会
async function f() {
    return await 123;
}

f().then(v => console.log(v));