.<template>
  <v-text-field v-model="valueProp" :label="label"  outlined
            dense required autofocus style="width: 250px;" @input="$emit('input', $event.target.value)"></v-text-field>
</template>

<script>
export default {
    props: {
        value: String,
        label: String,
      
  },
  computed: {
    valueProp:{
      get() {
        return this.value
      },
      set(newvalue) {
    return this.$emit('input', newvalue);
   } 
  }
}
}
</script>

<style>

</style>