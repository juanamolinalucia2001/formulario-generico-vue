<template>
  <v-container class="d-flex-column justify-center" width="400px">
    <form @submit.prevent="enviado" class="ml-5 mr-5">
      <!-- 
        Recorre el objeto 'campos' y crea un campo de texto para cada entrada.
        'campo' contiene los detalles del campo (name, data, type, rules).
        'nombre' es la clave del campo en 'campos'.
      -->
      <div v-for="(campo, nombre) in campos" :key="nombre">
        <v-text-field
          :name="campo.name"
          v-model="campo.data"
          :type="campo.type"
          :label="campo.name"
          :rules="campo.rules"
        />
      </div>
      <!-- 
        Botón de envío del formulario. Al hacer clic en él, se llama al método 'enviado'.
        'textoBoton' es el texto que se muestra en el botón.
      -->
      <v-btn type="submit" color="primary" class="text-center">{{ textoBoton }}</v-btn>
    </form>
  </v-container>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'FormularioGenerico',
  props: {
    // El componente recibe dos propiedades: 'objeto' y 'textoBoton'.
    // 'objeto' es un arreglo y es obligatorio.
    // 'textoBoton' es una cadena de texto y es obligatorio.
    objeto: {
      type: Array,
      required: true
    },
    textoBoton: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // 'campos' es una variable de datos que almacenará los campos del formulario.
      campos: []
    }
  },
  mounted() {
    //!IMPORTANTE
    // Convierte el objeto en un objeto observable de Vue
    // para que los cambios en los valores de los campos se
    // reflejen automáticamente en el objeto.
    this.campos = Vue.observable(this.objeto)
  },
  methods: {
    // Método que se ejecuta cuando se envía el formulario.
    enviado(e) {
      e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada.
      this.handleSubmit(e.target); // Llama al método 'handleSubmit' pasando el formulario como argumento.
    },
    handleSubmit(form) {
      const formData = new FormData(form); // Crea un objeto FormData a partir del formulario.
      const objetoCompleto = {};
      // Recorre los pares clave-valor en formData y los agrega al objeto 'objetoCompleto'.
      for (let [name, value] of formData) {
        objetoCompleto[name] = value;
      }
      // Emite un evento 'guardar' con el objeto completo como argumento.
      this.$emit('guardar', objetoCompleto);
    }
  }
}
</script>
