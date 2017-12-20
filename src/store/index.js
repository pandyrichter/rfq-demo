import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentBidGroupID: null,
  bidGroups: {
    1: {
      id: 1,
      name: 'Casegoods',
      // each item to be detailed item object
      // with item type determining bid analysis template
      items: ['nightstand', 'bedframe', 'side table'],
      deliveryDate: 'Feb 28, 2018',
      responseDate: 'Dec 31, 2017',
      sentBy: 'Lindsey Bluth',
      vendorPortal: true,
      bidsReleased: false,
      reviewed: false,
      vendors: ['BirchBasin', 'Timball', 'HardKnocks']
    },
    2: {
      id: 2,
      name: 'Lighting',
      items: ['Sconce', 'table light', 'floorlamp', 'chandelier'],
      deliveryDate: 'March 2, 2018',
      responseDate: 'Dec 31, 2017',
      sentBy: 'Lindsey Bluth',
      vendorPortal: true,
      bidsReleased: false,
      reviewed: false,
      vendors: ['BrightLight', 'Nielite', 'KingShine', 'RELED']
    },
    3: {
      id: 3,
      name: 'Seating',
      items: ['chair', 'lounge chair', 'Sofa', 'stool', 'pillows'],
      deliveryDate: 'April 8, 2018',
      responseDate: 'Dec 31, 2017',
      sentBy: 'Lindsey Bluth',
      vendorPortal: false,
      bidsReleased: false,
      reviewed: false,
      vendors: ['SquishyChair', 'OunceBounce']
    }
  },
  quotes: {}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
