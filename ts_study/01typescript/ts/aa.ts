let a = 4;
let b = 4;
(() => {
    function showMsg(str: string) {
        return '11' + str
    }
    let msg = '11'
    console.log(showMsg(msg))
})()