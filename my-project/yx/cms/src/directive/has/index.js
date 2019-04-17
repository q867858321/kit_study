import has from './has'

const install = function (Vue) {
  Vue.directive('has', has)
}

if (window.Vue) {
  window.has = has
  Vue.use(install); // eslint-disable-line
}

has.install = install
export default has
