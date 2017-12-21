import * as types from './mutation-types'

export const selectBidGroup = (context, payload) => {
  context.commit(types.SELECT_BID_GROUP, payload)
}

export const createQuoteSet = (context) => {
  context.commit(types.CREATE_QUOTE_SET)
}

export const addQuote = ({ commit }, payload) => {
  commit(types.SUBMIT_QUOTE, payload)
}
