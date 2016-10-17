const f=async function (val) {
    return Promise.reject(4)
}
f(1).then(v=>console.log(v)).catch(e=>console.log(e));
