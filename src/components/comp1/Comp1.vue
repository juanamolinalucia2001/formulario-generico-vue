<template>
  <v-container>
    <div>{{error}}</div>
    <div>{{isLoading}}</div>
    <v-row class="text-center" v-if="products">
      <v-col cols="12" v-for="item in products" :key="item.code">
        {{item.title}}- {{item.code}}
      </v-col>
    </v-row>
    <v-row class="text-center" v-if="! products">
      <v-col cols="12">
        NO ITEMS
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

 import storeComp1 from './storeComp1'
export default {
    mounted(){
      storeComp1.dispatch("getProducts")
    },
    computed: {
      products() {
        return storeComp1.state.items
      },
      isLoading() {
        return storeComp1.state.isLoadingItems
      },
      error() {
        return storeComp1.state.error
      }
    },
    methods:{
     /*getP(){
      // storeComp1.getters.getProduct = this.product
      // console.log("asd")
      this.product =  storeComp1.dispatch("getProducts")
      console.log("ads",this.product)
    
     }*/
    }
}
</script>