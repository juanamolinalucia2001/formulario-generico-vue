<template>
    <div>

        <v-btn @click="openDialog">Agregar</v-btn>
        <data-table />
       

        <FormGeneric :objeto="auto" @guardar="guardarAuto" :modo="modo" @update="actualizarObjeto" :dialog="dialog"/>

    </div>
</template>
  
<script>
import FormGeneric from '../Forms/FormGeneric.vue'
import DataTable from '../Tables/DataTable.vue'
export default {
    name: 'NuevoAuto',
    components: {
        FormGeneric,
        DataTable
    },
  
    data() {
        return {
            auto: [
                { name: 'marca', type: 'text', data: null },
                { name: 'modelo', type: 'text', data: null },
                { name: 'año', type: 'number', data: null },
            ],
            dialog: false,
            modo: 'agregar',
        }
    },
    methods: {
        guardarAuto(auto) {
            // Llama a la acción de Vuex para guardar el objeto "auto" en el estado
            console.log(auto, "hola")
            //hacer commit de auto

            this.dialog = false
        },
        openDialog() {
            this.dialog = true
        },
        actualizarObjeto(objetoActualizado) {
            this.auto = objetoActualizado;
            console.log(objetoActualizado, "actualizado")
        },
    }
}
</script>