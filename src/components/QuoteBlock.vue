<template>
  <div class="quote-block">
    <input type="text" v-model="quote.price">
    <input type="text" v-model="quote.id">
    <div>Quoteid: {{ quote.id }}</div>
    <div>{{ quote.item }}</div>
    <div>{{ quote.vendor }}</div>
    <div>Qty: {{ quote.qty }}</div>
    <button @click="createQuote(quote.id)">Submit quote</button>
    <div>Extended price: ${{ quote.price * quote.qty }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    vendor: String,
    item: String,
    quoteid: Number,
    qty: Number
  },
  data () {
    return {
      quote: {
        id: '',
        price: '',
        timestamp: Date.now(),
        vendor: this.vendor,
        item: this.item,
        qty: this.qty
        // id: this.quoteid
      }
    }
  },
  methods: {
    submitQuote () {
      console.log('Submitted quote:', this.quote)
    },
    ...mapMutations([
      'createQuote'
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
