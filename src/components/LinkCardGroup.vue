<template>
  <div class="linkCard">
    <div class="title" v-text="title"/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ShowList: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}

.linkCard {
  border: 1px #42b98377 groove;
  padding: 3px;
  margin: 3px;
  text-align: left;
  border-radius: 6px;
  margin: 3px 5px;
}
@media screen and (min-width: 900px) {
  .linkCard {
    width: 80%;
    display: inline-block;
  }
}
</style>