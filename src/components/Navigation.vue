<template>
  <LinkCardGroup
    v-for="(a,i) in siteData"
    :key="i"
    :siteData="a"
  />
</template>

<script>
import LinkCardGroup from "./LinkCardGroup.vue";
const siteData = [
  {
    title: "其他的导航网站",
    list: [
      { title: "萌导航", url: "https://www.moe123.net" },
      { title: "个站商店", url: "https://storeweb.cn" },
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
    ],
  },
  {
    title: "开发者之家",
    list: [
      { title: "Github", url: "https://www.github.com" },
      { title: "Gitee", url: "https://www.github.com" },
      { title: "思否", url: "https://segmentfault.com" },
    ],
  },
  {
    title: "云服务提供者",
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
    title: "视频网站",
    list: [
      { title: "AcFun", url: "https://www.acfun.com" },
      { title: "Bilibili", url: "https://www.bilibili.com" },
    ],
  },
  {
    title: "音乐网站与有声读物",
    list: [
      { title: "网易音乐", url: "https://music.163.com/" },
      { title: "腾讯音乐", url: "https://music.qq.com/" },
      { title: "喜马拉雅", url: "https://www.ximalaya.com" },
    ],
  },
  {
    title: "现代互联网冲浪使用说明",
    list: [
      { title: "萌娘百科", url: "https://zh.moegirl.org.cn" },
      { title: "小鸡词典", url: "https://jikipedia.com" },
      { title: "知乎日报", url: "https://daily.zhihu.com/" },
    ],
  },
  {
    title: "没分类",
    list: [{ title: "百度网盘", url: "https://pan.baidu.com" }],
  },
];
export default {
  data() {
    return {
      siteData,
    };
  },
  components: {
    LinkCardGroup
  },
};
</script>

<style>
</style>