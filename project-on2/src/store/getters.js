const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  pageList: state => state.page.pageList,
  curPageIndex: state => state.page.curPageIndex
}
export default getters
