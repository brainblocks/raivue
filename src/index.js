import RaiVue from './RaiVue.vue'

function install (Vue) {
  Vue.component(RaiVue.name, RaiVue)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default install
// const version = '__VERSION__'
// // Export all components too
// export {
//   RaiVue,
//   version
// }
