<template>
  <form
    id="search"
    :action="searchWebsiteID > -1 ? searchWebsiteList[searchWebsiteID].url : ''"
    target="_blank"
    @submit="clearKeyWords"
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
            v-text="'==帮我选择=='"
            @click="showHelper"
            :value="-1"
          />
        </select>
      </span>
      <input
        :disabled="searchWebsiteID < 0"
        type="text"
        id="keywordsInput"
        v-model="keywords"
        :placeholder="searchWebsiteID < 0 ? '先选择搜索引擎哦': '使用'+searchWebsiteList[searchWebsiteID].title+'搜索'"
        @dblclick="putKeyWords"
      />
      <input
        :disabled="searchWebsiteID < 0"
        type="submit"
        value="搜索"
      />
      <span
        class="hide"
        v-if="searchWebsiteID > -1"
      >
        <input
          v-model="keywords_Copy"
          :name="searchWebsiteID > -1 ? searchWebsiteList[searchWebsiteID].key : ''"
        />
        <input
          :name="key"
          :value="data"
          v-for="(data,key,index) in searchWebsiteList[searchWebsiteID].data || {}"
          :key="index"
        />
      </span>
    </span>
  </form>
  <div
    id="searchSelectHelper"
    v-if="searchWebsiteID == -1"
  >
    <div>搜索引擎使用提示</div>
    <ul>
      <li>网络热词用小鸡词典、网页开发使用 MDN、查公司使用爱企查</li>
      <li>如果是想了解一个名词概念，或许 <code>mag[i]</code> 可以给出不错的答案</li>
      <li>Excel 或者 Office 办公软件的使用方法，也许可以试试微软文档搜索</li>
      <li>需要找到某个问题的解决方案，请使用必应或者谷歌</li>
      <li>搜索电影、小说，夸克的搜索结果优于其他</li>
      <li>如果您需要搜索文中的某个段落出处，可以考虑使用百度</li>
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
    title: "MDN Web Doc",
    url: "https://developer.mozilla.org/zh-CN/search",
    key: "q",
  },{
    title: "小鸡词典",
    url: "https://jikipedia.com/search",
    key: "phrase",
  },
  {
    title: "知乎",
    url: "https://www.zhihu.com/search",
    key: "q",
  },
  {
    title: "mag[i]",
    url: "https://magi.com/search",
    key: "q",
  },
  {
    title: "爱企查",
    url: "https://aiqicha.baidu.com/s",
    key: "q",
    data: {
      t: 0,
    },
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
  {
    title: "夸克内置",
    url: "https://quark.sm.cn/s",
    key: "q",
  },
  {
    title: "搜狗微信",
    url: "https://weixin.sogou.com/weixin?type=2",
    key: "query",
    data: {
      type: 2,
    },
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
      searchWebsiteList,
      changeingWebsite: false,
      keywords: "",
      oldkeywords: "",
      keywords_Copy: "",
      searchWebsiteID: 0,
      searchHelper: 0,
    };
  },
  methods: {
    clearKeyWords() {
      this.keywords_Copy = this.keywords;
      this.oldkeywords = this.keywords;
      this.keywords = "";
    },
    putKeyWords() {
      if (this.oldkeywords) {
        this.keywords = this.oldkeywords;
      }
    },
  },
};
</script>

<style scoped lang="less">
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
  min-width: 1rem;
}
@media (min-width: 600px) {
  #search {
    display: inline-block;
    width: 90%;
  }
  #keywordsInput {
    flex: 5;
  }
}
@media screen and (min-width: 900px) {
  #search {
    display: inline-block;
    width: 70%;
  }
  #searchSelectHelper {
    width: 70%;
    display: inline-block;
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
  font-size: 1.2rem;
  line-height: 2rem;
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
.hide {
  display: none;
}
</style>