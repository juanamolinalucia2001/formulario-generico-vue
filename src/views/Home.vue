<template>
  <div class="home">

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Autos/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Autos from '../components/Forms/Autos.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    
    Autos
  }
}
</script>
