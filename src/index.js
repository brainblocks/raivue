import RaiPayment from './RaiPayment.vue'
import RaiDonation from './RaiDonation.vue'

function install (Vue) {
  Vue.component(RaiPayment.name, RaiPayment)
  Vue.component(RaiDonation.name, RaiDonation)
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
