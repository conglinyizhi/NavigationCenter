<template>
  <form
    id="search"
    :action="searchWebsiteList[searchWebsiteID].url"
    target="_blank"
  >
    <span class="searchBox">
      <span class="flex">
        <select>
          <option
            class="changeWebsiteButton"
            v-for="(a,i) in searchWebsiteList"
            :key="i"
            v-text="a.title"
            @click="changeWebsite_Getid(i)"
          />
        </select>
      </span>

      <input
        type="text"
        :name="searchWebsiteList[searchWebsiteID].key"
        id="keywordsInput"
        v-model="keywords"
      />
      <input
        type="submit"
        :value="searchWebsiteList[searchWebsiteID].button"
      />
    </span>
  </form>
</template>

<script>
const searchWebsiteList = [
  {
    title: "Bing",
    url: "https://cn.bing.com/search",
    key: "q",
    button: "必应搜索",
  },
  {
    title: "bilibili",
    url: "https://search.bilibili.com/all",
    key: "keyword",
    button: "哔哩哔哩搜索",
  },
  {
    title: "百度",
    url: "https://www.baidu.com/s",
    key: "wd",
    button: "百度搜索",
  },
  {
    title: "搜狗",
    url: "https://www.sogou.com/web",
    key: "query",
    button: "搜狗搜索",
  },
  {
    title: "谷歌",
    url: "https://www.google.com/search",
    key: "q",
    button: "谷歌搜索",
  },{
    title: "微软文档",
    url: "https://support.microsoft.com/zh-cn/Search/results",
    key: "query",
    button: "文档搜索",
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
  border-radius: 5px;
  padding: 5px 0;
  width: 50%;
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
#keywordsInput {
  margin-top: 1px;
  width: 70%;
  border: 1px #42b983 groove;
  border-radius: 2px;
  flex: 8;
}
.changeWebsiteButton {
  width: 4rem;
  /* background: #fff; */
  height: 1rem;
  line-height: 1rem;
  border: 1px #42b983 groove;
  margin: 0 4px;
  padding: 2px;
  border-radius: 3px;
}
input {
  border: 0;
}
input[type="submit"],
.flex {
  flex: 1;
  margin: 1px 3px 0;
  border: 1px #42b983 groove;
  border-radius: 3px;
}
.searchBox *{
  font-size: 1.2rem;
  line-height: 1.2rem;
}
.searchBox {
  display: flex;
  padding: 0 10px;
}
.itemList {
  display: block;
}
select {
  border: 0;
}
</style>