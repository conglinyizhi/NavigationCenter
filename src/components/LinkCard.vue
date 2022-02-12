<template>
  <a
    class="linkCard"
    :href="link"
    v-text="title"
    target="_blank"
  />
</template>

<script setup>
defineProps({
  title: String,
  link: String,
});
</script>

<style>
a {
  color: #42b983;
  text-decoration: none;
}

.linkCard {
  border: 1px #42b9832f groove;
  padding: 3px;
  margin: 3px;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  width: 10%;
  min-width: 4rem;
  max-width: 7rem;
}
.linkCard:hover{
  border-color: #42b983;
}

.linkCard .title {
  margin-bottom: 0.5rem;
}
</style>