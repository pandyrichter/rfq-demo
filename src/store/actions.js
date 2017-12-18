import * as types from './mutation-types'

export const selectBidGroup = ({ commit }, payload) => {
  commit(types.SELECT_BID_GROUP, payload)
}

export const addQuote = ({ commit }, payload) => {
  // need to implement commit as string
  commit(types.ADD_QUOTE, payload)
}
