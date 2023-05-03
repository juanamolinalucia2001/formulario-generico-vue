import Vue from "vue";
import Vuex from "vuex";
import service from "../servicio/empleados";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    empleados: [],
    service: new service(),
  },
  mutations: {
    setEmpleados(state, payload) {
      state.empleados = payload;
    },
  },
  actions: {
    async getEmpleados(state) {
      return new Promise(async (resolve, reject) => {
        try {
          let item = await state.state.service.getEmpleados();

          state.commit("setEmpleados", item);
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
  modules: {},
});
