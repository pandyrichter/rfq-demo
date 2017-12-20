import Vue from 'vue'
import * as types from './mutation-types'
// import uuidv4 from 'uuid/v4'

export default {
  [types.CREATE_QUOTE_SET] (state) {
    // Test... this should actually happen on created, if bidgroup doesnt' already
    // have a quote set
    Vue.set(state.quotes, 'new quotes', {1: 'quotes here'})
    // For each combination of vendors and items, generate uuid
    // and quote block within quote set
    // What actually happens in mutation vs somewhere else though?
    // Step 1: Retrieve current bid set
    if (state.currentBidGroupID) {
      let id = state.currentBidGroupID
      let group = state.bidGroups[id]
      // Step 2: Retrieve current bid set's vendors and items
      let vendors = group.vendors
      console.log(vendors)
      let items = group.items
      console.log(items)
      // Step 3: Create combination for each set of vendors and items
    }
  },
  [types.ADD_QUOTE] (state, payload) {
    payload.locked = true
    Vue.set(state.quotes, payload.idFake, {...payload})
  },
  [types.SELECT_BID_GROUP] (state, id) {
    setCurrentBidGroup(state, id)
  }
}

function setCurrentBidGroup (state, id) {
  state.currentBidGroupID = id
  console.log(`CurrentBidGroup: ${state.currentBidGroupID}`)
  if (!state.bidGroups[id]) {
    debugger
  }
  state.bidGroups[id].reviewed = true
  console.log(state)
}
