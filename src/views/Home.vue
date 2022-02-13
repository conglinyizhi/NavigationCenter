<template>
  <Search/>
  <Navigation/>
</template>

<script>
import Navigation from '../components/navigation.vue'
import Search from '../components/Search.vue'

export default {
  name: 'Home',
  components: {
    Navigation,Search
  }
}
</script>
