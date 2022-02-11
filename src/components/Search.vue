<template>
  <div id="search">
    <span @click="changeWebsite">切换引擎：Bing</span>
    <input type="text" name="keywords" id="keywordsInput" v-model="keywords" @keydown.enter="search" />
    <span @click="search">搜索</span>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    //为组件注册属性
    searchWebsite: {
      //规范写法
      type: String,
      default: "bing",
    },
  },
  methods: {
    search(){
      console.log(this.keywords)
    },changeWebsite(){
      console.log("更换搜索引擎")
    }
  },
  data: function () {
    //为组件注册数据
    return {
      keywords:""
    };
  },
};
// defineProps({keywords:""});
</script>

<style scoped>
#search {
  display: block;
  margin: 3px;
  border-radius: 1.3rem;
  padding: 3px 0;
  height: 1.3rem;
  border: 1px #ccc groove;
}

/* #search::before {
  content: "";
  width: 0;
  height: 0;
  border: 20px solid;
  position: absolute;
  top: 0px;
  left: 140px;
  border-color: #ff0 transparent transparent;
} */

input {
  border: 0;
}
</style>