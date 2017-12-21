import Vue from 'vue'
import * as types from './mutation-types'
import uuidv4 from 'uuid/v4'

export default {
  [types.CREATE_QUOTE_SET] (state) {
    // Create Quote Set to return to if session ends
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
      let bidCombinations = items.length * vendors.length
      let timestamp = Date.now()
      console.log(bidCombinations)
      for (let i = 0; i <= bidCombinations; i++) {
        let uniqueQuoteId = uuidv4()
        let quoteInit = {
          'id': uniqueQuoteId,
          'created': timestamp
        }
        Vue.set(state.quotes, uniqueQuoteId, quoteInit)
      }
      // Key questions (don't occur in mutation):
      // 1. How to tie each quote to a vendor and an item
      // (do i have to use a big recursive function from Stack Overflow?)
      // 2. How to display within grid format?
    }
  },
  [types.SUBMIT_QUOTE] (state, payload) {
    payload.locked = true
    Vue.set(state.quotes, payload.id, {...payload})
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
