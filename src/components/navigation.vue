<template>
  <div
    class="linkCardGroup"
    v-for="(siteList,i) in siteData"
    :key="i"
  >
    <div class="title">
      <span
        class="left"
        v-text="siteList.title"
      />
      <span class="right">包含 {{siteList.list.length}} 个站点</span>
    </div>
    <span
      v-for="(site,key) in siteList.list"
      :key="key"
    >
      <a
        class="linkCard"
        :href="site.url"
        v-text="site.title"
        :title="site.alt || site.title"
        target="_blank"
        v-if="!site.close"
      />
      <span
        v-else
        class="linkCard"
        v-text="site.title"
        @click="showCloseMessage(site)"
      />
      <div class="onlyPrint">
        <span v-text="site.title" /> <br />
        <span v-text="site.url" />
      </div>
    </span>
  </div>
</template>

<script>
const siteData = [
  {
    title: "更多导航网站",
    list: [
      { title: "萌导航", url: "https://www.moe123.net" },
      { title: "个站商店", url: "https://storeweb.cn" },
      {
        title: "牛逼网站",
        alt: "真的就叫这个名字……",
        url: "https://www.nbwz.com",
      },
    ],
  },
  {
    title: "邮箱",
    list: [
      { title: "QQ 邮箱", url: "https://mail.qq.com" },
      { title: "网易邮箱", url: "https://email.163.com" },
      { title: "GMail", url: "http://mail.google.com/mail?hl=zh-CN" },
      { title: "新浪邮箱", url: "https://mail.sina.com.cn" },
      { title: "Outlook", url: "https://outlook.live.com/mail/0/" },
    ],
  },
  {
    title: "文档",
    list: [
      { title: "OpenCV", url: "https://docs.opencv.org/3.4.0" },
      { title: "Vue.js", url: "https://cn.vuejs.org" },
      { title: "MDUI.js", url: "https://www.mdui.org/docs/" },
      {
        title: "Vuetify",
        alt: "Material Design 的 Vue 组件库",
        url: "https://vuetify.cn/zh-Hans/",
      },
    ],
  },
  {
    title: "开发者",
    list: [
      { title: "Github", url: "https://www.github.com" },
      { title: "Gitee", url: "https://www.github.com" },
      { title: "思否", url: "https://segmentfault.com" },
      { title: "博客园", url: "https://www.cnblogs.com" },
      { title: "SoJSON", url: "https://www.sojson.com/" },
    ],
  },
  {
    title: "云服务",
    list: [
      { title: "阿里云", url: "https://cloud.aliyun.com" },
      { title: "腾讯云", url: "https://cloud.tencent.com" },
      { title: "百度云", url: "https://cloud.baidu.com" },
      { title: "华为云", url: "https://cloud.huawei.com" },
      { title: "字节云", url: "https://qingfuwu.cn" },
    ],
  },
  {
    title: "游戏官网",
    list: [
      { title: "Genshin", url: "https://ys.mihoyo.com/main/" },
      { title: "米哈游", url: "https://mihoyo.com" },
      { title: "腾讯游戏", url: "https://game.qq.com" },
      { title: "完美世界", url: "https://game.wanmei.com" },
      { title: "网易游戏", url: "https://game.163.com" },
    ],
  },
  {
    title: "文字媒体",
    list: [
      { title: "少数派", url: "https://www.sspai.com" },
      { title: "知乎", url: "https://www.zhihu.com" },
      { title: "晚点", url: "https://www.latepost.com/site/index" },
    ],
  },
  {
    title: "视频",
    list: [
      { title: "AcFun", url: "https://www.acfun.com" },
      { title: "Bilibili", url: "https://www.bilibili.com" },
      { title: "优酷", url: "https://www.youku.com" },
      { title: "爱奇艺", url: "http://www.iqiyi.com/" },
      { title: "抖音", url: "https://www.douyin.com" },
      { title: "秒拍", url: "https://www.miaopai.com" },
      { title: "快手", url: "https://www.kuaishou.com" },
      { title: "小咖秀", url: "http://www.xiaokaxiu.com" },
      { title: "微视", url: "https://weishi.qq.com" },
      { title: "抖音火山版", url: "https://www.huoshanzhibo.com" },
      { title: "美拍", url: "https://www.meipai.com" },
      { title: "西瓜", url: "https://sso.toutiao.com" },
      { title: "快剪辑", url: "https://kuai.360.cn" },
      { title: "火锅视频", url: "https://yoo.qq.com" },
      { title: "好看视频", url: "https://haokan.baidu.com" },
      { title: "梨视频", url: "https://www.pearvideo.com" },
      { title: "小红书", url: "https://www.xiaohongshu.com" },
    ],
  },
  {
    title: "音乐与有声读物",
    list: [
      { title: "网易音乐", url: "https://music.163.com/" },
      { title: "腾讯音乐", url: "https://music.qq.com/" },
      { title: "喜马拉雅", url: "https://www.ximalaya.com" },
      { title: "荔枝FM", url: "https://lizhi.fm" },
      { title: "凤凰FM", url: "https://diantai.ifeng.com" },
    ],
  },
  {
    title: "互联网字典与WIKI",
    list: [
      { title: "萌娘百科", url: "https://zh.moegirl.org.cn" },
      { title: "小鸡词典", url: "https://jikipedia.com" },
      { title: "wikiHow", url: "https://zh.wikihow.com" },
    ],
  },
  {
    title: "网络存储服务",
    list: [
      { title: "蓝奏云", url: "https://up.woozooo.com/" },
      { title: "坚果云", url: "https://www.jianguoyun.com" },
      { title: "百度网盘", url: "https://pan.baidu.com" },
      { title: "OneDrive", url: "https://onedrive.live.com/about/zh-cn/" },
      { title: "和彩云", url: "https://yun.139.com/w/#/" },
      { title: "永硕E盘", url: "http://ys168.com/" },
      { title: "阿里云盘", url: "https://yunpan.aliyun.com" },
      { title: "腾讯微云", url: "https://www.weiyun.com" },
    ],
  },
  {
    title: "购物和比价",
    list: [
      { title: "啥值得买", alt: "什么值得买", url: "https://www.smzdm.com" },
      { title: "淘宝", url: "https://www.taobao.com" },
      { title: "京东", url: "https://www.jd.com" },
    ],
  },
  {
    title: "浏览器官网",
    list: [
      { title: "Chrome", url: "https://www.google.cn/chrome" },
      { title: "FireFox", url: "https://www.mozilla.org/zh-CN/firefox/" },
      { title: "Edge", url: "https://www.microsoft.com/zh-cn/edge" },
      { title: "TheWorld", url: "http://www.theworld.cn/" },
      { title: "Via", url: "https://viayoo.com/zh-cn/", only_android: true },
    ],
  },
  {
    title: "新闻资讯",
    list: [
      { title: "今日热榜", url: "https://tophub.today" },
      { title: "新浪", url: "https://www.sina.com.cn" },
      { title: "微博", url: "https://www.weibo.com" },
      { title: "搜狐", url: "https://www.sohu.com" },
    ],
  },
  {
    title: "友情链接",
    list: [{ title: "暂无", url: "?", close: "暂时没有友情链接" }],
  },
];
export default {
  data() {
    return {
      siteData,
    };
  },
  methods: {
    showCloseMessage(site) {
      window.alert(`站点 ${site.title} 关闭原因:\n${site.close}`);
    },
  },
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
  min-width: 5rem;
  max-width: 7rem;
  line-height: 1.1rem;
}
.linkCard:hover {
  border-color: #42b983;
}
.linkCard .title {
  margin-bottom: 0.5rem;
}

@media screen {
  .onlyPrint {
    display: none;
  }
}
</style>
