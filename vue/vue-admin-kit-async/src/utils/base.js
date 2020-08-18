const base = {};

//去左右空格
base.trim = function (str) {
  return str.replace(/^\s*/, '');
}

//去重
base.unique = function (arr) {
  let temp = []; //一个新的临时数组
  for (let i = 0; i < arr.length; i++) {
    if (temp.indexOf(arr[i]) == -1) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

export default base;
