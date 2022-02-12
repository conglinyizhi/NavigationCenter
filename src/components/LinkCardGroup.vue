<template>
  <div class="linkCardGroup">
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

<style>
a {
  color: #42b983;
}

.linkCardGroup {
  border: 1px #42b98377 groove;
  padding: 3px;
  margin: 3px;
  text-align: left;
  border-radius: 6px;
  margin: 3px 5px;
}
.linkCardGroup .title{
  padding-left:4px;
}
@media screen and (min-width: 900px) {
  .linkCardGroup {
    width: 80%;
    display: inline-block;
  }
}
</style>