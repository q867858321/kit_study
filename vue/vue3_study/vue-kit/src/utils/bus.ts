class Bus {
  list: {};
  constructor() {
    // 收集订阅信息,调度中心
    this.list = {}
  }
  // 订阅
  $on(name: string, fn: Function) {
    this.list[name] = this.list[name] || []
    this.list[name].push(fn)
  }
  // 发布
  $emit(name: string, data?: any) {
    if (this.list[name]) {
      this.list[name].forEach((fn: Function) => {
        fn(data)
      })
    }
  }
  // 取消订阅
  $off(name: string) {
    if (this.list[name]) {
      delete this.list[name]
    }
  }
}
export default new Bus()
// 参考
// https://blog.csdn.net/weixin_35958891/article/details/110441771
/*
使用方法
import Bus from '@/utils/bus'
a.vue文件
Bus.$emit('change-menu')
onBeforeUnmount(() => {
  Bus.$off('change-menu',{})
})
b.vue 文件
import Bus from '@/utils/bus'
Bus.$on('change-menu', (e) => {
    console.log('11', e)
})
*/
