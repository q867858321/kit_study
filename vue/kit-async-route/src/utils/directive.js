export default {
    // 自定义指令节流函数
    antiSnake: {
        inserted: (el, binding) => {
            let timer = null
            el.addEventListener('click', () => {
                if (!timer) {
                    el.setAttribute('disabled', true)
                    timer = setTimeout(() => {
                        clearTimeout(timer)
                        timer = null
                        el.removeAttribute('disabled')
                    }, binding.value || 1000)
                }
            })
        }
    },
    focus: {
        inserted: function (el, { value }) {
            console.log("el", el)
            if (value) {
                el.focus();
                el.querySelector('input').focus()
            }

        }
    },
    focus2: {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el, obj) {  //这是需要页面刚加载就能进行聚焦操作使用的钩子函数,可以省略的，视具体需求而定
            console.log('1', obj);
            if (obj.value) { //对值进行判断
                // 聚焦元素
                el.focus()
                el.querySelector('input').focus()
            }
        },
        // 当指令所在组件的 VNode 及其子 VNode 全部更新后调用
        componentUpdated: function (el, obj) {  //这是每当绑定的值发生改变时触发的钩子函数
            console.log('2', obj);  //可以打印看一下
            if (obj.value) {
                el.focus()
                el.querySelector('input').focus()
            }
        }
    }

}