<template>
  <div class="linkCardGroup">
    <div class="title">
      <span
        class="left"
        v-text="siteData.title"
      />
      <span class="right">包含 {{siteData.list.length}} 个站点</span>
    </div>
    <LinkCard
      v-for="(site,key) in siteData.list"
      :key="key"
      :title="site.title"
      :link="site.url"
    />
  </div>
</template>

<script>
import LinkCard from "./LinkCard.vue";
export default {
  data() {
    return {
      ShowList: false,
    };
  },
  props: {
    siteData: {
      type: Object,
      default: {
        title: "标题",
        list: [
          {
            title: "范例地址",
            url: "https://www.baidu.com",
          },
        ],
      },
    },
  },
  components: {
    LinkCard,
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
  padding-left: 4px;
}
@media screen and (min-width: 900px) {
  .linkCardGroup {
    width: 80%;
    display: inline-block;
  }
}
.title {
  padding: 0 5px 3px;
  display: flex;
}
.title span {
  flex: 1;
}
.title .right {
  text-align: right;
}
</style>