import RaiVue from 'src/RaiVue.vue'
import { createVM } from '../helpers/utils.js'

describe('RaiVue.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<RaiVue address="asdf" amount="1"></RaiVue>
`, { components: { RaiVue }})
    vm.$el.querySelector('.raivue h1').textContent.should.eql('RaiVue World!')
  })
})
