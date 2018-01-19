<template>
  <div class="raivue">
    <h1 class="raivue__title">RaiVue World!</h1>
    <span>addr: {{address}}</span>
    <span>amt: {{amount}}</span>
    <div id="raiblocks-button"></div>
  </div>
</template>

<script>
import * as brainblocks from '../lib/brainblocks/dist/brainblocks'

export default {
  props: ['address', 'amount', 'onSuccess'],
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
          destination: 'xrb_164xaa1ojy6qmq9e8t94mz8izr4mkf1sojb6xrmstru5jsif48g5kegcqg7y',
          currency: 'rai',
          amount: 1000
        },
        // Handle successful payments
        onPayment: function (data) {
          console.log('Payment successful!', data)
        }
      }, '#raiblocks-button')
    }
  }
}
</script>

<style>
</style>
