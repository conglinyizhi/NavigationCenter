<template>
  <div class="linkCard">
    <div v-text="title"></div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>

<style scoped>
a {
  color: #42b983;
}

.linkCard {
  border: 1px #42b983 groove;
  padding: 3px;
  margin: 3px;
  text-align: left;
  border-radius: 6px;
}

.linkCard .title {
  margin-bottom: 0.5rem;
}
</style>