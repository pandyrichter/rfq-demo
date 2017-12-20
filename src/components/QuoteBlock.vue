<template>
  <div class="quote-block">
    price
    <input type="text" v-model="quote.price">
    id
    <input type="text" v-model="quote.idFake">
    <div>Quoteid: {{ quote.id }}</div>
    <div>{{ quote.item }}</div>
    <div>{{ quote.vendor }}</div>
    <div>Qty: {{ quote.qty }}</div>
    <button @click="addQuote(quote)">Submit quote</button>
    <div>Extended price: ${{ quote.price * quote.qty }}</div>
    <div v-if="quote.locked"><span class="fa fa-lock"></span></div>
    <div v-else><span class="fa fa-unlock-alt"></span></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import uuidv4 from 'uuid/v4'

export default {
  props: {
    vendor: String,
    item: String,
    qty: Number
  },
  data () {
    return {
      quote: {
        idFake: '',
        id: uuidv4(),
        price: '',
        timestamp: Date.now(),
        vendor: this.vendor,
        item: this.item,
        qty: this.qty,
        locked: false
      }
    }
  },
  methods: {
    submitQuote () {
      console.log('Submitted quote:', this.quote)
    },
    ...mapActions([
      // mapActions implements 'dispatch' for each action
      'addQuote'
    ])
  }
}
</script>

<style lang="postcss" scoped>
  .quote-block {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 15px;
  }
</style>
