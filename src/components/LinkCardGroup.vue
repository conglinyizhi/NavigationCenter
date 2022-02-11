<template>
  <div class="linkCard">
    <div @click="ShowList =! ShowList">
      <span v-text="title"></span> - <span v-if="ShowList">隐藏</span><span v-else>展开</span>
    </div>
    <div v-show="ShowList">
      <slot></slot>
    </div>
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