<template>
  <LinkCardGroup title="其他的导航网站">
    <LinkCard title="萌导航" link="https://www.moe123.net"/>
  </LinkCardGroup>
  <LinkCardGroup title="邮箱">
    <LinkCard title="QQ 邮箱" link="https://mail.qq.com"/>
    <LinkCard title="网易邮箱" link="https://mail.163.com"/>
    <LinkCard title="GMail" link="https://pan.baidu.com"/>
  </LinkCardGroup>
  <LinkCardGroup title="文档">
    <LinkCard title="OpenCV" link="https://docs.opencv.org/3.4.0"/>
    <LinkCard title="Vue.js" link="https://cn.vuejs.org"/>
    <LinkCard title="MDUI.js" link="https://www.mdui.org/docs/"/>
  </LinkCardGroup>
  <LinkCardGroup title="开发者之家">
    <LinkCard title="Github" link="https://www.github.com"/>
    <LinkCard title="Gitee" link="https://www.github.com"/>
    <LinkCard title="思否" link="https://segmentfault.com"/>
  </LinkCardGroup>
  <LinkCardGroup title="云服务提供者">
    <LinkCard title="阿里云" link="https://cloud.aliyun.com"/>
    <LinkCard title="腾讯云" link="https://cloud.tencent.com"/>
    <LinkCard title="百度云" link="https://cloud.baidu.com"/>
    <LinkCard title="华为云" link="https://cloud.huawei.com"/>
    <LinkCard title="字节云" link="https://qingfuwu.cn"/>
  </LinkCardGroup>
  <LinkCardGroup title="游戏官网">
    <LinkCard title="Genshin" link="https://ys.mihoyo.com/main/"/>
    <LinkCard title="米哈游" link="https://mihoyo.com"/>
    <LinkCard title="腾讯游戏" link="https://game.qq.com"/>
    <LinkCard title="完美世界" link="https://game.wanmei.com"/>
    <LinkCard title="网易游戏" link="https://game.163.com"/>
  </LinkCardGroup>
  <LinkCardGroup title="视频网站">
    <LinkCard title="AcFun" link="https://www.acfun.com"/>
    <LinkCard title="Bilibili" link="https://www.bilibili.com"/>
  </LinkCardGroup>
  <LinkCardGroup title="音乐网站与有声读物">
    <LinkCard title="网易音乐" link="https://music.163.com/"/>
    <LinkCard title="腾讯音乐" link="https://music.qq.com/"/>
    <LinkCard title="喜马拉雅" link="https://www.ximalaya.com"/>
  </LinkCardGroup>
  <LinkCardGroup title="信息获取平台">
    <LinkCard title="萌娘百科" link="https://zh.moegirl.org.cn"/>
    <LinkCard title="小鸡词典" link="https://jikipedia.com"/>
    <LinkCard title="知乎日报" link="https://daily.zhihu.com/"/>
  </LinkCardGroup>
  <LinkCardGroup title="没分类">
    <LinkCard title="百度网盘" link="https://pan.baidu.com"/>
  </LinkCardGroup>
</template>

<script setup>
import LinkCard from './LinkCard.vue'
import LinkCardGroup from './LinkCardGroup.vue'
defineProps({});
</script>

<style scoped>

</style>