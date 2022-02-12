<template>
  <div class="linkCardGroup">
    <div class="title">
      <span
        class="left"
        v-text="siteData.title"
      />
      <span class="right">包含 {{siteData.list.length}} 个站点</span>
    </div>
    <a
      v-for="(site,key) in siteData.list"
      :key="key"
      class="linkCard"
      :href="site.url"
      v-text="site.title"
      :title="site.alt || site.title"
      target="_blank"
    />
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
    siteData: {
      type: Object,
      default: {
        title: "标题",
        list: [
          {
            title: "范例地址",
            url: "https://www.baidu.com",
            alt:"链接"
          },
        ],
      },
    },
  }
};
</script>

<style>
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
a {
  color: #42b983;
  text-decoration: none;
}

.linkCard {
  border: 1px #42b9832f groove;
  padding: 3px;
  margin: 3px;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  width: 10%;
  min-width: 4rem;
  max-width: 7rem;
  line-height: 1.1rem;
}
.linkCard:hover {
  border-color: #42b983;
}

.linkCard .title {
  margin-bottom: 0.5rem;
}
</style>