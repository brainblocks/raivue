import NanoPayment from 'src/NanoPayment.vue'
import { createVM } from '../helpers/utils.js'

describe('NanoPayment.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<NanoPayment
  address="xrb_1brainb3zz81wmhxndsbrjb94hx3fhr1fyydmg6iresyk76f3k7y7jiazoji"
  :amount="250000"
  :onPayment="paymentCallback"
  :onToken="tokenCallback">
</NanoPayment>
`, {
  components: { NanoPayment },
  methods: {
    paymentCallback (data) {
      console.log('Successful Payment!', data)
    },
    tokenCallback (data) {
      console.log('Payment Started!', data)
    }
  }
})
    setTimeout(function () {
      vm.$el.querySelector('.nanovue__payment').children.length.should.equal(1)
    }, 1000)
  })
})
