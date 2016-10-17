async function f() {
    throw new Error('出错了');
}
//一下两种方式都可以但是能retrun
/*f().then(
    v => console.log(v),
    e => console.log(e)
);*/
f().catch(val=>{
    console.log(val)
});
