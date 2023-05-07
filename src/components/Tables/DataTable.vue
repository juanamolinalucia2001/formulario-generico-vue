<template>
  <v-data-table class="mt-5" :headers="encabezados" :items="datos" :items-per-page="5">
    <template v-slot:item="{ item }">
      <tr>
        <td v-for="columna in columnas" :key="columna.value">
          {{ item[columna.value] }}
        </td>
        <td>
          <v-btn  color="primary" @click="editar(item)">editar</v-btn>
        </td>
        <td>
          <v-btn  color="red" @click="eliminar(item)"> delete</v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'DataTableGeneric',
  props: {
    encabezados: {
      type: Array,
      required: true
    },
    datos: {
      type: Array,
      required: true
    }
  },
  computed: {
    columnas() {
      return this.encabezados;
    }
  },
  methods: {
    editar(item) {
      this.$emit('editar', item);
    },
    eliminar(item) {
      this.$emit('eliminar', item);
    }
  }
};
</script>
