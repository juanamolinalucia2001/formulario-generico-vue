import Vue from 'vue'
import Vuex from 'vuex'
import service from './service2'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      service: new service(),
      categories: []
  },
  mutations: {
      setCategories(state,items){
          state.categories = items
      }
  },
  actions: {
      async getCategories(state){
          try {
              let cate = await state.state.service.listCategories();
              state.commit('setCategories', cate)
              console.log(cate)
          } catch (error) {
              console.log(error)
          }
      }
  },
  modules: {
  }
})
