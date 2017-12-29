<template>
  <div id="app">
    <!-- <router-view/> -->
    <h2>Bid Groups</h2>
    <ul class="bidgroup-list">
      <bid-group
        v-for="bidgroup in bidGroups"
        :key="bidgroup.id"
        :bidgroup="bidgroup"
        :active="bidgroup.id === currentBidGroupID"
      >
      </bid-group>
    </ul>
    <hr>
    <div v-if="currentBidGroupID">Active bid group: <strong>{{ currentBidGroup.name }}</strong></div>
    <hr>
    <button @click="createQuoteSet">Create Quote Set</button>
    <div v-if="!currentBidGroupID" class="analysis-placeholder">Select a bid group to complete analysis.</div>
    <bid-analysis class="bid-grid">
      <div class="bid-grid__title">{{ currentBidGroup.name }}</div>
      <div class="bid-grid__header">
        <vendor-block v-for="(vendor, index) in currentBidVendors"
        :key="`vendor-${index}`"
        :vendor="vendor">
        </vendor-block>
      </div>
      <div class="bid-grid__items">
        <item-block
        v-for="(item, index) in currentBidItems"
        :key="`item-${index}`"
        :item="item">
        </item-block>
      </div>
      <div class="bid-grid__quotes">
        <div class="quote-grid">
          <quote-block class="quote-grid__item" v-for="(quote, index) in currentBidQuotes" :key="index" :id="quote.id" :bidPair="quote.bidPair" :vendor="'Timball'" :item="'Nighstand'" :qty="3"></quote-block>
        </div>
      </div>
      <div class="bid-grid__placeholder"></div>
      <div class="bid-grid__totals">Totals</div>
    </bid-analysis>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import BidGroup from './components/BidGroup'
import BidAnalysis from './components/BidAnalysis'
import ItemBlock from './components/ItemBlock'
import VendorBlock from './components/VendorBlock'
import QuoteBlock from './components/QuoteBlock'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'bidGroups',
      'currentBidGroupID',
      'currentBidGroup',
      'currentBidItems',
      'currentBidVendors',
      'currentBidQuotes'
    ])
  },
  methods: {
    ...mapActions([
      'createQuoteSet'
    ])
  },
  components: {
    BidGroup,
    BidAnalysis,
    ItemBlock,
    VendorBlock,
    QuoteBlock
  }
}
</script>

<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}

.analysis-placeholder {
  background-color: yellow;
  border-radius: 5px;
  padding: 15px;
}

.bid-grid {
  width: 800px;
  height: 600px;
  border: 1px solid gray;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-areas:
    "title header"
    "items quotes"
    "placeholder totals";

  &__title {
    grid-area: title;
    background-color: coral;
  }

  &__header {
    grid-area: header;
    background-color: yellow;
  }

  &__items {
    grid-area: items;
    background-color: aquamarine;
  }

  &__quotes {
    grid-area: quotes;
    background-color: lightblue;
  }

  &__totals {
    grid-area: totals;
    background-color: lightpink;
  }

  &__placeholder {
    grid-area: placeholder;
    background-color: blue;
  }
}

.quote-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  // Want to set quote grid with 
  // max columns = number of vendors
  // max rows = number of items

  &__item {

  }
}
</style>
