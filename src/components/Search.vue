<template>
  <form
    id="search"
    :action="searchWebsiteID > -1 ? searchWebsiteList[searchWebsiteID].url : ''"
    target="_blank"
  >
    <span class="searchBox">
      <span class="flex">
        <select
          class="selectWebsiteList"
          v-model="searchWebsiteID"
        >
          <option
            class="changeWebsiteButton"
            v-for="(a,i) in searchWebsiteList"
            :key="i"
            :value="i"
            v-text="a.title"
          />
          <option
            v-text="'帮我选择'"
            @click="showHelper"
            :value="-1"
          />
        </select>
      </span>
      <input
        :disabled="searchWebsiteID == -1"
        type="text"
        :name="searchWebsiteID > -1 ? searchWebsiteList[searchWebsiteID].key : ''"
        id="keywordsInput"
        v-model="keywords"
      />
      <input
        :disabled="searchWebsiteID == -1"
        type="submit"
        value="搜索"
      />
    </span>
  </form>
  <div
    id="searchSelectHelper"
    v-if="searchWebsiteID == -1"
  >
    <div>搜索引擎使用提示</div>
    <ul>
      <li>如果您需要找到某个问题的解决方案，请使用必应或者谷歌</li>
      <li>如果您需要 Excel 或者 Office 办公软件的使用方法，请使用微软文档搜索</li>
      <li>如果您需要搜索文中的某个段落出处，优先使用百度</li>
      <li>除非仅仅是在搜索一个 bilibili UP 主或者 BVid 或者 aid，否则请不要使用 bilibili 搜索</li>
    </ul>
  </div>
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
    title: "百度",
    url: "https://www.baidu.com/s",
    key: "wd",
  },
  {
    title: "搜狗",
    url: "https://www.sogou.com/web",
    key: "query",
  },
  {
    title: "谷歌",
    url: "https://www.google.com/search",
    key: "q",
  },
  {
    title: "微软文档",
    url: "https://support.microsoft.com/zh-cn/Search/results",
    key: "query",
  },
];
export default {
  name: "search",
  props: {
    searchWebsite: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      changeingWebsite: false,
      keywords: "",
      searchWebsiteID: 0,
      searchWebsiteList,
      searchHelper: 0,
    };
  },
};
</script>

<style scoped>
#search {
  display: block;
  margin: 3px;
  border-radius: 5px;
  padding: 5px 0;
}

  #keywordsInput {
    margin-top: 1px;
    border: 1px #42b983 groove;
    border-radius: 2px;
    flex: 2;
  }
@media (min-width: 600px) {
  #search {
    display: inline-block;
    width: 70%;
  }
  #keywordsInput {
    flex: 5;
  }
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
input,
select {
  border: 0;
}
input[type="submit"],
.flex {
  flex: 1;
  margin: 1px 3px 0;
  border: 1px #42b983 groove;
  border-radius: 3px;
}
.searchBox * {
  font-size: 1rem;
  line-height: 1.1rem;
}
.searchBox {
  display: flex;
  padding: 0 10px;
}

.selectWebsiteList {
  width: 100%;
  min-width: 3rem;
}
#searchSelectHelper {
  border: 1px #42b983 groove;
  margin: 5px;
  border-radius: 3px;
  padding: 15px 30px 3px;
  padding-right: 20px;
}
#searchSelectHelper ul {
  text-align: left;
  padding-left: 0;
}
</style>