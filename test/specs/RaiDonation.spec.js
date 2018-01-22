import RaiDonation from 'src/RaiDonation.vue'
import { createVM } from '../helpers/utils.js'

describe('RaiDonation.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<RaiDonation address="xrb_3ui4sg4jjdxsfwshjcbkjnthdzmtbgxe7pa597cxsa4aamkkj3b8dmeome4i"></RaiDonation>
`, { components: { RaiDonation }})
    setTimeout(function () {
      vm.$el.querySelector('.raivue__donation').children.length.should.equal(2)
    }, 1000)
  })
})
