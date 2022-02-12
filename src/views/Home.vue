<template>
  <Search/>
  <Navigation/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '../components/Navigation.vue'
import Search from '../components/Search.vue'

export default {
  name: 'Home',
  components: {
    Navigation,Search
  }
}
</script>
