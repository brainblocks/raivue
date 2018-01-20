<template>
  <div class="raivue">
    <div id="raivue__button"></div>
  </div>
</template>

<script>
import * as brainblocks from '../lib/brainblocks/dist/brainblocks'

export default {
  name: 'RaiVue',
  props: {
    address: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      default: 1
    },
    onSuccess: {
      type: Function,
      default: function (data) {
        console.log('Payment successful!', data)
      }
    }
  },
  mounted () {
    const _this = this
    setTimeout(function () {
      _this.initialize()
    })
  },
  methods: {
    initialize () {
      brainblocks.Button.render({
        // Pass in payment options
        payment: {
          destination: this.address,
          currency: 'rai',
          amount: this.amount
        },
        // Handle successful payments
        onPayment: this.onSuccess
      }, '#raivue__button')
    }
  }
}
</script>