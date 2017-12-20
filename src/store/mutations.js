import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.ADD_QUOTE] (state, payload) {
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
