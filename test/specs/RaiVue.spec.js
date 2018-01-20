import RaiPayment from 'src/RaiPayment.vue'
import { createVM } from '../helpers/utils.js'

describe('RaiPayment.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<RaiPayment address="xrb_3ui4sg4jjdxsfwshjcbkjnthdzmtbgxe7pa597cxsa4aamkkj3b8dmeome4i" :amount="250000"></RaiPayment>
`, { components: { RaiPayment }})
    setTimeout(function () {
      vm.$el.querySelector('#raivue__button').children.length.should.equal(1)
    }, 1000)
  })
})
