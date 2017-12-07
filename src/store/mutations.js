import Vue from 'vue'

export const setCurrentBidGroup = (state, id) => {
  state.currentBidGroupID = id
  console.log(`CurrentBidGroup: ${state.currentBidGroupID}`)
  if (!state.bidGroups[id]) {
    debugger
  }
  state.bidGroups[id].reviewed = true
}

export const createQuote = (state, id, item, vendor, price) => {
  Vue.set(state.quotes, id, {
    id,
    item,
    vendor,
    price,
    selected: false,
    timestamp: Date.now()
  })
}
