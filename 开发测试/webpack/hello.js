require('./world.js');
require('style-loader!css-loader!./style.css'); // webpack本身不能加载css文件，需要使用css-loader用来使webpack可处理css文件，style-loader用来将css的style转换为<style>标签中的样式，插入到HTML文件中。

function hello(str) {
    document.write(str);
}


hello(' Hello Everyone!');