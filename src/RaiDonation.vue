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
    <RaiPayment
      v-if="validAmount"
      :address="address"
      :amount="raiAmount"
      :onSuccess="onSuccess">
    </RaiPayment>
    <div class="raivue__error" v-else>
      Amount 0.000001 and 5 XRB.
    </div>
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
        console.log('RaiDonation successful!', data)
      }
    }
  },
  data () {
    return {
      id: null,
      currency: 'xrb',
      amount: 0.25,
      donations: [1, 3, 5, 10]
    }
  },
  computed: {
    raiAmount () {
      if (this.amount === '') { return 1 } // set to 1 rai when blank
      if (this.currency === 'xrb') {
        return this.amount * 1000000
      } else {
        return this.amount
      }
    },
    validAmount () {
      if (this.raiAmount > 0 && this.raiAmount <= 5000000) { return true }
    }
  },
  mounted () {
    this.id = 'raivue__donation-' + this._uid
  },
  methods: {
    testSuccess (data) { console.log(data) }
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
  color: #1a3238;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
}

.raivue__donation_custom > span.label {
  padding: 0 0.4em;
  font-size: 16px;
  font-weight: 100;
}

.raivue__donation_button_content,
.raivue__donation_custom {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.raivue__donation_input,
.raivue__donation_select {
  padding: 0.5em 0.6em;
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
  margin: 0.25em 0;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-left: 0.4em;
}

.raivue__error {
  display: inline-block;
  width: 100%;
  height: 50px;
  background-color: rgb(255, 159, 159);
  border-radius: 5px;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 50px;
  color: #1a3238;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  transition: height 0.5s ease-in-out;
}
</style>
