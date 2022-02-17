<template>
  <div id="header">
    <div id="headerTitle">
      互联网领航者
    </div>
    <div id="headerMenu">
      <router-link
        v-for="(l,key) in h"
        :key="key"
        :to="l.to"
      >{{l.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h: [
        { name: "主页", to: "/" },
        { name: "工具", to: "/tools" },
        { name: "调试", to: "/debug" },
        { name: "关于", to: "/about" },
      ],
    };
  },
};
</script>
<style lang="less">
#headerMenu {
  display: flex;
}

#header a {
  width: 100%;
  display: inline-block;
  flex: 1;
  padding: 10px;
  &:hover {
    background: #151 !important;
  }
}

#headerTitle {
  padding: 3rem 0 1rem;
}

.router-link-active {
  background: rgb(10, 54, 10);
}
</style>