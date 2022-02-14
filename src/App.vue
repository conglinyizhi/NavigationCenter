<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  user-select: none;
}

/* 深色模式 */
html {
  background: #111;
}
body,*{
  background-color: #111;
  color: #fff;
}
body{
  min-height: 100vh;
  margin:0;
}
</style>
