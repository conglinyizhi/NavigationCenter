<template>
  <div class="about">
    <h1>进度条</h1>
    <div title="鼠标放上去或者点一下">充满希望的进度条，或许某个时候他会跑满</div>
    <div class="programBarFather">
      <div class="programBar"></div>
    </div>
  </div>
  <div>
    <a href="/tools/shi_zhi_za_tan">
      <div>原神 - 拾枝杂谈生成辅助</div>
    </a>
  </div>
</template>

<style>
.programBar {
  width: 61%;
  height: 20px;
  background: #6cf;
  border-radius: 20px;
  transition: width 1s;
}
.programBar:hover,
.programBarFather:hover div {
  width: 100%;
}

.programBarFather {
  background: #666;
  border-radius: 10px;
  margin: 10px;
}
</style>