<template>
    <div>
      <h1>Nuevo Auto</h1>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card style="max-width:500px">
            <FormGeneric :objeto="auto" @guardar="guardarAuto" />
        </v-card>
      </v-dialog>
      <v-btn @click="openDialog">abrir</v-btn>
    </div>
  </template>
  
  <script>
  import FormGeneric from '../comp1/FormGeneric.vue'
  export default {
    name: 'NuevoAuto',
    components: {
        FormGeneric
    },
    data() {
      return {
        auto: [ 
          {name: 'marca', type:'text',data:null},
          {name: 'modelo', type:'text',data:null},
          {name: 'año', type:'number',data:null},
            ],
        dialog:false,
      }
    },
    methods: {
      guardarAuto(auto) {
        // Llama a la acción de Vuex para guardar el objeto "auto" en el estado
              console.log(auto, "hola")
             
             this.dialog=false
          },
          openDialog() {
        this.dialog=true
      }
    }
  }
  </script>