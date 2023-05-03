<template>
  <div>
  
    <table class="tabla-empleados">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Legajo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado.id">
          <td>{{ empleado.Nombre }}</td>
          <td>{{ empleado.Legajo }}</td>
          <td>
            <button @click="editarEmpleado(empleado)">Editar</button>
            <button @click="eliminarEmpleado(empleado)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import empleados from '../../store/empleados'
export default {
  data() {
    return {
      nuevoEmpleado: {},
      modoEditar:null
    }
  },
  mounted() {
    empleados.dispatch('getEmpleados')
  },
  computed: {
    empleados() {
      return empleados.state.empleados
    }
  },
  methods: {
    editarEmpleado(empleado) {
      this.nuevoEmpleado = Object.assign({}, empleado);
      this.modoEditar = true;
    }
  }
};
</script>

<style scoped>
/* ... código del CSS ... */

.tabla-empleados {
  border-collapse: collapse;
  margin-top: 20px;
  width: 100%;
}

.tabla-empleados th,
.tabla-empleados td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.tabla-empleados th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.tabla-empleados tr:hover {
  background-color: #f2f2f2;
}

.tabla-empleados td button {
  background-color: transparent;
  border: none;
  color: #1a73e8;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 10px;
  padding: 0;
  text-decoration: underline;
}

.tabla-empleados td button:hover {
  text-decoration: none;
}
</style>
  