<template>
  <div id="app">
    <!-- <router-view/> -->
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
    <div>Active bid group: {{ currentBidGroupID }}</div>
    <bid-analysis>
      <vendor-block v-for="(vendor, index) in currentBidVendors" :key="`vendor-${index}`" :vendor="vendor"></vendor-block>
      <item-block
      v-for="(item, index) in currentBidItems"
      :key="`item-${index}`"
      :item="item"
      >
      </item-block>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>
