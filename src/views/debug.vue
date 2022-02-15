<template>
  <div
    class="debugCard"
    style="text-align:center;display:block"
  >
    请放心，这些调试信息仅在前端浏览，不会发送到服务器</div>
  <div
    class="debugCard"
    v-for="(value,key,index) in debugdata"
    :key="index"
  >
    <span
      class="title"
      v-text="key"
    ></span>
    <span
      class="text"
      v-text="value"
    ></span>
  </div>
</template>

<style scope>
.title {
  flex: 1;
}
.text {
  flex: 3;
}
.debugCard {
  border: 1px rgb(31, 31, 31) groove;
  border-radius: 4px;
  display: flex;
  padding: 3px;
  margin: 3px 1rem;
}
.debugCard:hover {
  border-color: rgb(19, 97, 3);
}
</style>

<script>
export default {
  data() {
    return {
      debugdata: {
        screen: { width: window.innerWidth, height: window.innerHeight },
        userAgent: navigator.userAgent,
        credentials: navigator.credentials,
        doNotTrack: navigator.doNotTrack,
        geolocation: navigator.geolocation,
        maxTouchPoints: navigator.maxTouchPoints,
        mediaCapabilities: navigator.mediaCapabilities,
        mediaDevices: navigator.mediaDevices,
        mediaSession: navigator.mediaSession,
        permissions: navigator.permissions,
        pointerEnabled: navigator.pointerEnabled,
        serviceWorker: navigator.serviceWorker,
        cookie: document.cookie,
      },
    };
  },
};
</script>