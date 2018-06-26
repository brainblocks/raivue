<template>
  <div class="nanovue__payment" :id="id"></div>
</template>

<script>
import * as brainblocks from '../lib/brainblocks/dist/brainblocks'

export default {
  name: 'nanoPayment',
  props: {
    address: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      default: 'rai'
    },
    amount: {
      type: Number,
      default: 1
    },
    onPayment: {
      type: Function,
      default: function (data) {
        console.log('Payment successful!', data)
      }
    },
    onToken: {
      type: Function,
      default: function (data) {
        console.log('Payment Started!', data.token)
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
    currency () {
      this.reset()
      this.initialize()
    },
    address () {
      this.reset()
      this.initialize()
    }
  },
  mounted () {
    this.id = 'nanovue__payment-' + this._uid
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
        onPayment: this.onPayment,
        onToken: this.onToken
      }, '#' + this.id)
    },
    reset () {
      document.getElementById(this.id).innerHTML = ''
    }
  }
}
</script>