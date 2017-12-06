import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  currentBidGroupID: null,
  bidGroups: {
    1: {
      id: 1,
      name: 'Casegoods',
      items: ['nightstand', 'bedframe', 'side table'],
      deliveryDate: 'Feb 28, 2018',
      responseDate: 'Dec 31, 2017',
      sentBy: 'Lindsey Bluth',
      vendorPortal: true,
      bidsReleased: false
    },
    2: {
      id: 2,
      name: 'Lighting',
      items: ['Sconce', 'table light', 'floorlamp'],
      deliveryDate: 'March 2, 2018',
      responseDate: 'Dec 31, 2017',
      sentBy: 'Lindsey Bluth',
      vendorPortal: true,
      bidsReleased: false
    },
    3: {
      id: 3,
      name: 'Seating',
      items: ['chair', 'lounge chair', 'Sofa'],
      deliveryDate: 'April 8, 2018',
      responseDate: 'Dec 31, 2017',
      sentBy: 'Lindsey Bluth',
      vendorPortal: false,
      bidsReleased: false
    }
  }
}

export default new Vuex.Store({
  state,
  getters
})
