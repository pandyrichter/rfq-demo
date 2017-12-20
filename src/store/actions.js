import * as types from './mutation-types'

export const selectBidGroup = (context, payload) => {
  context.commit(types.SELECT_BID_GROUP, payload)
}

export const addQuote = ({ commit }, payload) => {
  commit(types.ADD_QUOTE, payload)
}
