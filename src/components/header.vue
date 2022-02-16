<template>
  <div id="header">
    <div id="headerTitle">
      丛林意志的互联网领航页
    </div>
    <div id="headerMenu" class="row">
      <router-link class="col-md-1" to="/">主页</router-link>
      <router-link class="col-md-1" to="/tools">工具</router-link>
      <router-link class="col-md-1" to="/debug">调试</router-link>
      <router-link class="col-md-1" to="/about">关于</router-link>
      <span class="col-md-1" v-for="a in 3" :key="a">1</span>
    </div>
  </div>
</template>

<script setup>
defineProps({});
</script>

<style lang="less">
/* #header {
  padding: 1rem;
} */
#headerMenu {
  display: flex;
}
#header a {
  width: 100%;
  display: inline-block;
  flex: 1;
  padding: 10px;
}

#header a:hover {
  background: #151;
}

#headerTitle{
  padding: 3rem 0 1rem;
}
</style>