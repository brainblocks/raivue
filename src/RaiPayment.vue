<template>
  <div class="raivue__payment" :id="id"></div>
</template>

<script>
import * as brainblocks from '../lib/brainblocks/dist/brainblocks'

export default {
  name: 'RaiPayment',
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
        console.log('RaiPayment successful!', data)
      }
    }
  },
  data () {
    return {
      id: null
    }
  },
  watch: {
    amount () {
      this.reset()
      this.initialize()
    },
    address () {
      this.reset()
      this.initialize()
    }
  },
  mounted () {
    this.id = 'raivue__payment-' + this._uid
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
      }, '#' + this.id)
    },
    reset () {
      document.getElementById(this.id).innerHTML = ''
    }
  }
}
</script>