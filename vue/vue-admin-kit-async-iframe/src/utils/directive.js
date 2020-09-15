export default {
    // 自定义指令节流函数
    focus: {
        inserted: function (el, { value }) {
            el.focus();
            el.querySelector('input').focus()
        }
    }

}