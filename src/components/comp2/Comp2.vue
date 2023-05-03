.<template>
  <v-container>
      <v-row>
          <v-col v-for="item in category" :key="item.id">
              <h1>{{item.categories}}</h1>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import store2 from './store2'
export default {
mounted(){
    store2.dispatch("getCategories")
},
computed:{
    category(){
        return store2.state.categories
    }
}
}
</script>

<style>

</style>