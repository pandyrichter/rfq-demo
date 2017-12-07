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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import BidGroup from './components/BidGroup'
import BidAnalysis from './components/BidAnalysis'
import ItemBlock from './components/ItemBlock'
import VendorBlock from './components/VendorBlock'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'bidGroups',
      'currentBidGroupID',
      'currentBidGroup',
      'currentBidItems',
      'currentBidVendors'
    ])
  },
  components: {
    BidGroup,
    BidAnalysis,
    ItemBlock,
    VendorBlock
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
