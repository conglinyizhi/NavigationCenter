<template>
  <div id="header">
    [深色模式] 丛林意志的互联网领航页 |
    <router-link to="/">主页</router-link> |
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script setup>
defineProps({});
</script>

<style>
#header {
  padding: 1rem;
}
</style>