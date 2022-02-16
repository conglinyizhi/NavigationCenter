<template>
  <div id="footer">
    <div>
      我虽无意逐鹿，却知苍生苦楚 ——原神 钟离
    </div>
    <div>Powery By <a
        href="https://v3.vuejs.org/"
        target="_blank"
      >Vue 3</a> | 托管在 <a href="https://vercel.com/">Vercel</a></div>
    <div>如果需要提交网站…… 目前没有提交渠道</div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      debugdata: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  },
};
</script>

<style scoped  lang="less">
#footer {
  text-align: center;
  padding-bottom: 1rem;
}

#footer > div {
  margin: 10px;
}

#debugtip {
  border: 1px #ccc groove;
  display: inline-block;
  padding: 0 10px;
  border-radius: 10px;
}
</style>
