 //定义函数
 window.Clipboard = (function (window, document, navigator) {
     var textArea,
         copy;

     //创建文本元素
     function createTextArea(text) {
         textArea = document.createElement('textArea');
         textArea.innerHTML = text;
         textArea.value = text;
         document.body.appendChild(textArea);
     }
     //选择内容
     function selectText() {
         textArea.select();
     }

     //复制到剪贴板
     function copyToClipboard() {
         try {
             if (document.execCommand("Copy")) {
                 alert('copied!')
             } else {
                 alert('copied error!')
             }
         } catch (err) {
             alert('copied error!');

         }
         document.body.removeChild(textArea);
     }

     copy = function (text) {
         createTextArea(text);
         selectText();
         copyToClipboard();
     };

     return {
         copy: copy
     };
 })(window, document, navigator);