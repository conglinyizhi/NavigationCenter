<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <LinkCard title="OpenCV C++ 官方英文文档" link="https://docs.opencv.org/3.4.0/"/>
  <LinkCard title="Github 开源社区" link="https://www.github.com"/>
  <LinkCard title="Gitee 国内开源社区" link="https://www.github.com"/>
  <LinkCard title="Bilibili 视频网站" link="https://www.bilibili.com"/>
  <LinkCard title="萌娘百科" link="https://zh.moegirl.org.cn"/>
  <LinkCard title="QQ 邮箱" link="https://mail.qq.com"/>
  <LinkCard title="百度网盘" link="https://pan.baidu.com"/>
  <div>Powery By <a href="https://vercel.com/">Vercel</a></div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LinkCard from './components/LinkCard.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
