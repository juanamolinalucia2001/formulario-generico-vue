.<template>
  <v-card>
      <v-card-title>
        <span class="subheading">geofences</span>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid" lazy-validation @submit.prevent="enviado(geofences)">
         
         <TextField :value="geofences.name" :label="labels[0]"  v-model="geofences.name"/>
         <TextField :value="geofences.description" :label="labels[1]" />
         <TextField :value="geofences.address" :label="labels[2]"/>
         <v-btn type="submit" class="btn mb-5" color="#294f75">Aceptar</v-btn>
        </v-form>
        
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-spacer></v-spacer>
        <div class="d-flex justify-end">
          
         
        </div>
      </v-card-actions>
    </v-card>
</template>

<script>
import TextField from '../inputs/TextField.vue'
export default {
  components: { TextField },
data() {
    return {
        geofences: {
            name: "",
            description: "",
            address:""
        },
        labels: ['Nombre','Descripcion','Direccion'],
      valid:true
    }
    },
    computed: {
        
    },
    methods: {
        enviado(e) {
        console.log(e)
    }
}
}
</script>

<style>

</style>