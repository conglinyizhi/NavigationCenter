<template>
  <div class="linkCard">
    <div
      class="title"
      v-text="title"
    ></div>
    <div><a
        :href="link"
        v-text="link"
        target="_blank"
      /></div>
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
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  border-radius: 6px;
}

.linkCard .title {
  margin-bottom: 0.5rem;
}
</style>