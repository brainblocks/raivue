import NanoPayment from './NanoPayment.vue'

function install (Vue) {
  Vue.component(NanoPayment.name, NanoPayment)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default install