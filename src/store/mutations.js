export const setCurrentBidGroup = (state, id) => {
  state.currentBidGroupID = id
  console.log(`CurrentBidGroup: ${state.currentBidGroupID}`)
  if (!state.bidGroups[id]) {
    debugger
  }
  state.bidGroups[id].reviewed = true
}
