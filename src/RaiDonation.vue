<template>
  <div class="raivue__donation" :id="id">
    <div class="raivue__donation_custom">
      {{label}}
      <select v-model="currency">
        <option value="xrb">XRB</option>
        <option value="rai">Rai</option>
      </select>
      <input type="text" v-model.number="amount">
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
      label: 'Donate',
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
.raivue__donations {
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 10px;
}

.raivue__donation_button {
  display: inline-block;
  height: 50px;
  background-color: #eee;
  border-radius: 5px;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 50px;
  color: #1a3238;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  min-width: 50px;
}

.raivue__donation_button_content {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
