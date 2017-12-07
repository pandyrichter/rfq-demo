import Vue from 'vue'

export const setCurrentBidGroup = (state, id) => {
  state.currentBidGroupID = id
  console.log(`CurrentBidGroup: ${state.currentBidGroupID}`)
  if (!state.bidGroups[id]) {
    debugger
  }
  state.bidGroups[id].reviewed = true
  console.log(state)
}

export const createQuote = (state, id) => {
  // need to use Vue.set to add property to reactive property
  // FIXME: quote being added (not all info), but not rendering in Quote count
  Vue.set(state.quotes, id, "I'm a quote!")
}
