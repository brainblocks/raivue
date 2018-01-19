<template>
  <div class="raivue">
    <h1 class="raivue__title">RaiVue World!</h1>
    <span>addr: {{address}}</span>
    <span>amt: {{amount}}</span>
  </div>
</template>

<script>
import * as brainblocks from '../lib/brainblocks/dist/brainblocks'
console.log(brainblocks)
export default {
  props: ['address', 'amount', 'onSuccess']
}
</script>

<style>
</style>
