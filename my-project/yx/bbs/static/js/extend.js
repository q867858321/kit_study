//数组去除空格
Array.prototype.trimNull = function () {
    return this.filter(function (item, index) {
        return item != undefined;
    });
}