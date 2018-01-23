<template>
  <div class="raivue__donation" :id="id">
    <div class="raivue__donation_custom">
      <span class="label">
        {{label}}
      </span>
      <input type="text" v-model.number="amount" class="raivue__donation_input">
      <select v-model="currency" class="raivue__donation_select">
        <option value="xrb">XRB</option>
        <option value="rai">Rai</option>
      </select>
    </div>
    <!-- <div class="raivue__donations">
      <div role="button" class="raivue__donation_button" v-for="(donation,key) in donations" :key="key" v-on:click="amount = donation">
        <div class="raivue__donation_button_content">
          ${{donation}}
        </div>
      </div>
      <div role="button" class="raivue__donation_button">
        <div class="raivue__donation_button_content">
          {{amount}}
        </div>
      </div>
    </div> -->
    <RaiPayment address="xrb_3ui4sg4jjdxsfwshjcbkjnthdzmtbgxe7pa597cxsa4aamkkj3b8dmeome4i" :amount="raiAmount"></RaiPayment>
  </div>
</template>

<script>
import RaiPayment from './RaiPayment'

export default {

  name: 'RaiDonation',
  components: { RaiPayment },
  props: {
    label: {
      type: String,
      default: 'Donate'
    },
    address: {
      type: String,
      required: true
    },
    onSuccess: {
      type: Function,
      default: function (data) {
        console.log('Payment successful!', data)
      }
    }
  },
  data () {
    return {
      id: null,
      currency: 'rai',
      amount: 1,
      donations: [1, 3, 5, 10]
    }
  },
  computed: {
    raiAmount () {
      if (this.currency === 'xrb') {
        return this.amount * 1000000
      } else {
        return this.amount
      }
    }
  },
  mounted () {
    this.id = 'raivue__donation-' + this._uid
  }
}
</script>

<style>
.raivue__donation {
  width: 300px;
  display: inline-block;
  height: 50px;
  border-radius: 5px;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 50px;
  color: #1A3238;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
}

.raivue__donation_custom > span.label {
  padding: 10px;
  font-size: 16px;
  font-weight: 100;
}

.raivue__donation_button_content,
.raivue__donation_custom {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.raivue__donation_input,
.raivue__donation_select {
  padding: .5em .6em;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  vertical-align: middle;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 0.01em;
  text-transform: none;
  height: 35px;
}

.raivue__donation_input {
  width: 100%;
  flex: 1;
}
.raivue__donation_select {
  display: block;
  margin: .25em 0;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-left: 5px;
}
</style>
