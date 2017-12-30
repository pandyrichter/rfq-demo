<template>
  <div class="quote-block" :class="{ quoteblockactive : quote.locked }">
    price
    <input type="text" v-model="quote.price" @keyup.enter="addQuote(quote)">
    <div>Quoteid: {{ quote.id }}</div>
    <div>Pair: {{ quote.bidPair }}</div>
    <div>Extended price: ${{ quote.price * quote.qty }}</div>
    <div class="quote-block__functions">
      <button @click="addQuote(quote)">Submit quote</button>
      <div v-if="quote.locked"><span class="fa fa-lock"></span></div>
      <div v-else><span class="fa fa-unlock-alt"></span></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    vendor: String,
    item: String,
    qty: Number,
    id: String,
    bidPair: Array
  },
  data () {
    return {
      quote: {
        idFake: '',
        price: '',
        timestamp: Date.now(),
        id: this.id,
        vendor: this.vendor,
        item: this.item,
        qty: this.qty,
        locked: false,
        bidPair: this.bidPair
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

    &__functions {
      display: flex;
      justify-content: space-between;
    }
  }

  .quoteblockactive {
    background-color: lightgray;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 15px;
  }
</style>
