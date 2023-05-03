<template>
  <div class="home">
    <!-- <Comp1/> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Autos/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Autos from '../components/comp1/Autos.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    
    Autos
  }
}
</script>
