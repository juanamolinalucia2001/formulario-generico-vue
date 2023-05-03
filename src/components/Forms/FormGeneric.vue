<template>
    <v-dialog v-model="dialog" max-width="500px" persistent>
        <v-card style="max-width:500px">
            <v-card-title>
                <span class="subheading">{{ modo === 'agregar' ? 'Agregar' : 'Editar' }} elemento</span>
            </v-card-title>
            <form @submit.prevent="(modo, enviado)" style="max-width: 500px;">
                {{ campos }}
                <div v-for="(campo, nombre) in campos" :key="nombre">
                    <v-text-field outlined :name="campo.name" v-model="campo.data" :type="campo.type" :label="campo.name" />
                </div>
                <v-btn type="submit">{{ modo === 'agregar' ? 'Agregar' : 'Editar' }}</v-btn>
                <v-btn @click="closeDialog">Cerrar</v-btn>
            </form>
        </v-card>
    </v-dialog>
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
        modo: {
            type: String,
            required: true,
            default: 'agregar'
        },
        dialog: {
        type:Boolean
       },
    },
    data() {
        return {
            campos: [],
         
        }
    },
  
    mounted() {
        // Convierte el objeto en un objeto observable de Vue para que los cambios en los valores de los campos se reflejen automáticamente en el objeto
        this.campos = Vue.observable(this.objeto)
    },
    methods: {
        enviado(modo, e) {
            e.preventDefault();
            this.handleSubmit(e.target);
            console.log("el modo", modo)

        },
        handleSubmit(form) {
            const formData = new FormData(form);
            const objetoCompleto = {};
            for (let [name, value] of formData) {
                objetoCompleto[name] = value;
            }
            if (this.modo === 'agregar') {
                console.log("estoy en agregar", objetoCompleto)
                this.$emit('agregar', objetoCompleto);
            } else if (this.modo === 'editar') {
                console.log("estoy en editar", objetoCompleto)
                this.$emit('update', objetoCompleto);
            }


        },
        closeDialog() {
            this.dialog = false
        }



    }

}
</script>