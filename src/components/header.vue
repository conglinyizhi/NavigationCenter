<template>
  <div id="header">
    丛林意志的互联网领航页
    <div id="headerMenu">
      <router-link to="/">主页</router-link>
      <router-link to="/tools">工具</router-link>
      <router-link to="/about">关于</router-link>
      <a v-for="a in 2" :key="a">维护中</a>
    </div>
  </div>
</template>

<script setup>
defineProps({});
</script>

<style>
/* #header {
  padding: 1rem;
} */
#headerMenu{
  display: flex;
}
#header a{
  width: 100%;
  display: inline-block;
  flex: 1;
  padding: 10px;
}

#header a:hover {
  background: #151;
}
</style>
