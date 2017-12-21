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
    <bid-analysis>
      <button @click="createQuoteSet">Create Quote Set</button>
      <div v-if="!currentBidGroupID" class="analysis-placeholder">Select a bid group to complete analysis.</div>
      <vendor-block v-for="(vendor, index) in currentBidVendors"
      :key="`vendor-${index}`"
      :vendor="vendor">
      </vendor-block>
      <item-block
      v-for="(item, index) in currentBidItems"
      :key="`item-${index}`"
      :item="item">
      </item-block>
      <hr>
      <div>Totals</div>
    </bid-analysis>
    <quote-block v-for="(quote, index) in currentBidQuotes" :key="index" :id="quote.id" :vendor="'Timball'" :item="'Nighstand'" :qty="3"></quote-block>
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
</style>
