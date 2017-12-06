<template>
  <div id="app">
    <!-- <router-view/> -->
    <ul class="bidgroup-list">
      <bid-group
        v-for="bidgroup in bidGroups"
        :key="bidgroup.id"
        :bidgroup="bidgroup"
        :active="bidgroup.id === currentBidGroup"
      >
      </bid-group>
    </ul>
    <hr>
    <div>Active bid group: {{ currentBidGroup }}</div>
    <bid-analysis>
      <item-block></item-block>
    </bid-analysis>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ItemBlock from './components/ItemBlock'
import BidGroup from './components/BidGroup'
import BidAnalysis from './components/BidAnalysis'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'bidGroups',
      'currentBidGroup'
    ])
  },
  components: {
    ItemBlock,
    BidGroup,
    BidAnalysis
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
