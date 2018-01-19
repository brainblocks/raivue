import RaiVue from './RaiVue.vue'

function plugin (Vue) {
  Vue.component('raivue', RaiVue)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  RaiVue,
  version
}
