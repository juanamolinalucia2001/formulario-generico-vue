import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    empleados: []
  },
  mutations: {
    agregarEmpleado(state, empleado) {
      state.empleados.push(empleado);
    },
    editarEmpleado(state, { index, empleado }) {
      if (index !== -1) {
        state.empleados.splice(index, 1, empleado);
      }
    },
    eliminarEmpleado(state, empleado) {
      // Buscar el empleado en la lista y eliminarlo
      const index = state.empleados.findIndex(e => e.DNI === empleado.DNI);
      if (index !== -1) {
        state.empleados.splice(index, 1);
      }
    }
  },
  actions: {
    guardarEmpleado({ commit }, empleado) {
      commit('agregarEmpleado', empleado);
    },
    editarEmpleado({ commit, state }, { empleado }) {
      const index = state.empleados.findIndex(e => e.DNI === empleado.DNI);
      if (index !== -1) {
        commit('editarEmpleado', { index, empleado });
      }
    },

    eliminarEmpleado({ commit }, empleado) {
      commit('eliminarEmpleado', empleado);
    }
  },
  getters: {
    obtenerEmpleados(state) {
      return state.empleados;
    }
  }
});
