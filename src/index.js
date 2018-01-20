import RaiPayment from './RaiPayment.vue'

function install (Vue) {
  Vue.component(RaiPayment.name, RaiPayment)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default install
// const version = '__VERSION__'
// // Export all components too
// export {
//   RaiPayment,
//   version
// }
