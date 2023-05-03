<template>
  <div>
    <h1>Nuevo Auto</h1>
    <FormularioGenerico :objeto="auto" storeAction="guardarAuto" />
  </div>
</template>

<script>
import FormularioGenerico from '@/components/commons/FormGeneric.vue'

export default {
  name: 'NuevoAuto',
  components: {
    FormularioGenerico
  },
  data() {
    return {
      auto: [ 
        {name: 'marca', type:'text',data:null},
        {name: 'modelo', type:'text',data:null},
        {name: 'año', type:'number',data:null},
      ]
    }
  },
  methods: {
    guardarAuto(auto) {
      // Llama a la acción de Vuex para guardar el objeto "auto" en el estado
      console.log(auto)
    }
  }
}
</script>
