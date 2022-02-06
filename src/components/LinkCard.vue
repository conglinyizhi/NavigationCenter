<template>
  <div class="linkCard">
    <div
      class="title"
      v-text="title"
    ></div>
    <div><a :href="link"></div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  link: String,
});
</script>

<style scoped>
a {
  color: #42b983;
}

.linkCard {
  border: 1px #42b983 groove;
  padding: 3rem;
  margin: 3rem;
}

.linkCard .title {
  margin-bottom: 1.5rem;
}
</style>