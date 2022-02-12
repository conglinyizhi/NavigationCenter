<template>
  <form
    id="search"
    :action="searchWebsiteList[searchWebsiteID].url"
    target="_blank"
  >
    <div
      class="btn"
      @click="changeWebsite"
    >
      <span v-if="changeingWebsite">点击右侧选择搜索引擎</span>
      <span v-else>{{searchWebsiteList[searchWebsiteID].title}} 或者其他？</span>
    </div>
    <span v-show="changeingWebsite">
      <span
        class="changeWebsiteButton"
        v-for="(a,i) in searchWebsiteList"
        :key="i"
        v-text="a.title"
        @click="changeWebsite_Getid(i)"
      ></span>
    </span>
    <input
      v-show="!changeingWebsite"
      type="text"
      :name="searchWebsiteList[searchWebsiteID].key"
      id="keywordsInput"
      v-model="keywords"
      @keydown.enter="search"
    />
    <input
      class="btn"
      type="submit"
      value="搜索"
    />
  </form>
</template>

<script>
const searchWebsiteList = [
  {
    title: "Bing",
    url: "https://cn.bing.com/search",
    key: "q",
  },
  {
    title: "bilibili",
    url: "https://search.bilibili.com/all",
    key: "keyword",
  },
  {
    title: "百度搜索",
    url: "https://www.baidu.com/s",
    key: "wd",
  },
  {
    title: "搜狗搜索",
    url: "https://www.sogou.com/web",
    key: "query",
  },
  {
    title: "Google",
    url: "https://www.google.com/search",
    key: "q",
  },
];
export default {
  name: "search",
  props: {
    //为组件注册属性
    searchWebsite: {
      //规范写法
      type: Number,
      default: 0,
    },
  },
  methods: {
    search() {},
    changeWebsite() {
      this.changeingWebsite = true;
    },
    changeWebsite_Getid(id) {
      this.searchWebsiteID = id;
      this.changeingWebsite = false;
    },
  },
  data() {
    return {
      changeingWebsite: false,
      keywords: "",
      searchWebsiteID: 0,
      searchWebsiteList,
    };
  },
};
// defineProps({keywords:""});
</script>

<style scoped>
#search {
  display: inline-block;
  margin: 3px;
  border-radius: 1.3rem;
  padding: 5px 0;
  width: 50%;
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
.btn {
  width: 25%;
}
#keywordsInput {
  width: 50%;
  border: 1px #42b983 groove;
}
.changeWebsiteButton {
  border: 1px #42b983 groove;
  margin: 0 4px;
  padding: 2px;
  border-radius: 3px;
}
input {
  border: 0;
}
span {
  padding: 0 10px;
}
</style>