<template>
    <form @submit.prevent="enviado" style="max-width: 500px;">
      {{campos}}
      <div v-for="(campo, nombre) in campos" :key="nombre">
        <v-text-field   outlined :name="campo.name" v-model="campo.data" :type="campo.type" :label="campo.name"/>
      </div>
      <v-btn type="submit">Guardar</v-btn>
    </form>
  </template>
  
  <script>
  import Vue from 'vue'
  export default {
    name: 'FormularioGenerico',
    props: {
      objeto: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        campos: []
      }
    },
    mounted() {
      // Convierte el objeto en un objeto observable de Vue para que los cambios en los valores de los campos se reflejen automáticamente en el objeto
      this.campos = Vue.observable(this.objeto)
    },
    methods: {
      enviado(e){
            e.preventDefault();
           this.handleSubmit(e.target);
      
      },
      handleSubmit(form) {
        const formData = new FormData(form);
            const objetoCompleto = {};
            for (let [name, value] of formData) {
              objetoCompleto[name] = value;
            }
            this.$emit('guardar', objetoCompleto)
      
          },
        
    }
      
  }
  </script>