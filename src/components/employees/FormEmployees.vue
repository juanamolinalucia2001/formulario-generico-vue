<template>
  <div>
    <v-btn color="light-green" class="mt-10 ml-5" dark @click="changeMode('agregar')" >Agregar</v-btn>

    <v-card max-width="600px" class="mx-auto">
        <h3 class="text-center">{{modo}}</h3>
        <formGeneric 
         :objeto="camposEmpleado"
         :textoBoton="textoBoton" 
         @guardar="guardarEmpleado"
         :rules="rules"
         ></formGeneric>
    </v-card>

    <data-table-generic
      :encabezados="encabezadosTabla"
      :datos="empleados"
      @editar="editarEmpleado"
      @eliminar="eliminarEmpleado"
    ></data-table-generic>
  </div>
</template>

<script>
import formGeneric from '../Forms/FormGeneric.vue';
import DataTableGeneric from '../Tables/DataTable.vue';
import employees from '../../store/empleados';


export default {
  name: 'FormularioEmpleados',
  components: {
    formGeneric,
    DataTableGeneric
  },
  data() {
    return {
      camposEmpleado: [
        { name: 'name', data: '', type: 'text', rules:[(v) => !!v || 'El nombre es obligatorio']},
        { name: 'DNI', data: '', type: 'text',rules: [(v) => !!v || 'El DNI es obligatorio', (v) => v.length <= 8 || 'Dni is too long (maximum 8 characters)']},
        { name: 'FechNac', data: '', type: 'date',rules:[(v) => !!v || 'La fecha de nacimiento es obligatoria'] }
      ],
      modo:'agregar',
      encabezadosTabla: [
        { text: 'Nombre', value: 'name' },
        { text: 'DNI', value: 'DNI' },
        { text: 'Fecha de Nacimiento', value: 'FechNac' },
      ],

    };
  },
   
  computed: {
    empleados() {
      return employees.state.empleados;
    },
    textoBoton() {
      if (this.modo === 'editar') {
        return 'Editar';
      } else if (this.modo === 'eliminar') {
        return 'Eliminar';
      } else {
        return 'Guardar';
      }
    }
  },
  methods: {
    guardarEmpleado(campos) {
  console.log('Estoy en guardar empleados');
  console.log(campos, 'los campos');
  if (this.modo === 'agregar') {
    employees.commit('agregarEmpleado', campos);
  } else if (this.modo === 'editar') {
    console.log('acción que edita en el store');
    employees.dispatch('editarEmpleado', { empleado: campos });
  } else if (this.modo === 'eliminar') {
    console.log('acción que elimina en el store');
    employees.dispatch('eliminarEmpleado', campos);
  }
  this.resetearFormulario();
}
,

    editarEmpleado(empleado) {
    console.log(empleado, 'item empleado a editar');
    this.modo = 'editar';
    this.camposEmpleado.forEach(campo => {
      campo.data = empleado[campo.name] ;
    });
  },
    eliminarEmpleado(empleado) {
      console.log(empleado, 'item empleado a eliminar');
      this.modo = 'eliminar';
      this.camposEmpleado.forEach(campo => {
      campo.data = empleado[campo.name] || '';
    });
      // Resto de la lógica para eliminar empleado
    },
    resetearFormulario() {
    this.camposEmpleado.forEach(campo => {
      campo.data = '';
    });
  },
   changeMode(mode) {
      this.modo = mode;
    }
  }
};
</script>
