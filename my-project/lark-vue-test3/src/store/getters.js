const getters = {
  showFooter: state => state.footerStatus.showFooter,
}
export default getters

//使用
//<sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>

// computed: {
//   ...mapGetters([
//     'permission_routers',
//     'sidebar'
//   ]),
//   isCollapse() {
//     return !this.sidebar.opened
//   }
// }
