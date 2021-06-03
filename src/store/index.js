import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todo from './todo'

export const namespaced = true;

export default new Vuex.Store({
  modules:{
todo
  }
})