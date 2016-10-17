
let co=require('co')
function* genFunc(initValue) {
    let first = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'first-' + initValue);
});

    let second = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'second-' + first);
});

    let third = yield new Promise((resolve, reject) => {
        setTimeout(resolve, 700, 'third--' + second);
});

    return 'third--' + second;
}

co(genFunc(1))
    .then((value) => {
    console.log(value, '---结果已经返回了');
});
