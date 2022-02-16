<template>
  <span
    v-text="data"
    :class="{showMode:mode == 1}"
    :style="{background:color}"
    class="tag"
  ></span>
</template>

<script>
export default {
  name: "tag",
  props: {
    color: {
      type: String,
      default: "#6cf",
    },
    mode: {
      type: Number,
      defalut: 0,
    },
  },
};
</script>

<style scope lang="less">
.tag {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
}

.showMode {
  display: inline-block;
  position: static;
}
</style>
