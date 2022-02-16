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

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  user-select: none;
}

/* 深色模式 */
.bgBlack,
html {
  background-color: #111 !important;
}
body {
  min-height: 100vh;
  margin: 0;
  .bgBlack();
  & * {
    background-color: #111;
    color: #fff;
  }
  & #app a {
    color: rgb(197, 236, 217);
    text-decoration: none;
    overflow: hidden;
  }
}
</style>
