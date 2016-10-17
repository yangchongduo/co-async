/*（2）async函数返回的Promise对象，必须等到内部所有await命令的Promise对象执行完，才会发生状态改变。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

 下面是一个例子*/
async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)
// "ECMAScript 2017 Language Specification"