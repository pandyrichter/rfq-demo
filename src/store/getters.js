export const bidGroups = state => state.bidGroups

export const currentBidGroupID = state => state.currentBidGroupID

export const currentBidGroup = state => {
  return state.currentBidGroupID
  ? state.bidGroups[state.currentBidGroupID]
  : {}
}

export const currentBidItems = state => {
  const bidgroup = currentBidGroup(state)
  return bidgroup.items
    ? bidgroup.items
    : []
}

export const currentBidVendors = state => {
  const bidgroup = currentBidGroup(state)
  return bidgroup.vendors
  ? bidgroup.vendors
  : []
}

export const currentBidQuotes = state => {
  return state.quotes
  ? state.quotes
  : {}
}
