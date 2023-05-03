import Vue from 'vue'
import Vuex from 'vuex'
import compService from './serviceComp1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    service: new compService(),
    isLoadingItems: false,
    items: [],
    error: '',
  },
  mutations:{
    setProducts(state,items){
      state.items = items
    },
    setIsLoading(state, value){
      state.isLoadingItems = value
    },
    setError(state, value){
      state.error = value
    }
  },
  actions: {
     preRequest(state) {
        state.commit('setError', '')
        state.commit('setProducts', [])
        state.commit('setIsLoading', true)
     },
     async getProducts(state){
      this.dispatch('preRequest', state)
      try {
        let items = await state.state.service.listProducts();
        state.commit('setProducts', items)
        state.commit('setIsLoading', false)
      }catch(e) {
        state.commit('setIsLoading', false)
        state.commit('setError', 'Ocurrio un error')
      }
    }
  
  },
  modules: {
  },
  // getters:{
  //   getproduct(state){
  //    var product = state.items
  //    console.log('prod', product, state)

  //    var payload = []
  //    product.map(function (element){
  //     payload.push(element)
  //     return payload
  //    })
  //    console.log("payload",payload)
  //   }
  // }
})
