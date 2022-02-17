<template>
    即将删除无用的工具，如果需要，可以通过技术手段强制显示，但是无实际功能（没有编写 JavaScript 部分）
    <form v-show="false">
      <div class="view_title center">原神 - 拾枝杂谈生成辅助</div>
      <div class="view_title">我们无法直接生成这些文案，大多数文字都需要手动输入，我们只是提供了一部分可视化编写方式</div>
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div v-if="viewID == 0">
        <div class="form-group row">
            <label for="peopleName" class="col-sm-2 col-form-label">角色名</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="peopleName">
            </div>
        </div>
        <div class="form-group row">
            <label for="mapName" class="col-sm-2 col-form-label">地区名</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="mapName" v-model="mapName">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">神之眼</label>
            <div class="col-sm-10">
            <select
            id="inputState"
            class="form-control"
            v-model="eyesID"
            >
            <option
                v-for="(a,key) in '火水风雷草冰岩'"
                :key="key"
                v-text="a"
                :value="a"/>
            </select>
            </div>
        </div>
      </div>
      <div v-if="viewID == 1">
        <div class="form-group row">
            <label for="mapName" class="col-sm-2 col-form-label">地区与角色描述</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="mapName">
            </div>
        </div>
      </div>
      <div class="form-group row">
          <label for="mapName" class="col-sm-2 col-form-label">角色台词 1</label>
          <div class="col-sm-10">
              <input type="text" class="form-control" id="mapName">
          </div>
      </div>
      <div class="form-group row">
          <label for="mapName" class="col-sm-2 col-form-label">角色台词 1</label>
          <div class="col-sm-10">
              <input type="text" class="form-control" id="mapName">
          </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="button" class="btn btn-primary">下一页</button>
        </div>
      </div>
    </form>
</template>

<script>
const eyesList = '火水风雷草冰岩'.split("")
export default {
  data(){
    return {
      viewID:0,
      peopleName:"",
      mapName:"",
      eyesID:0,
      eyesList,
    }
  }
};
</script>

<style lang="less" scoped>
form {
  padding: 1rem 3rem;
  * {
    text-align: left;
  }
  input,select {
    background: black !important;
    color: white;
  }
  .progress{
    border: 1px #176629 groove;
    background-color: #176629;
    background: black !important;
    margin: 1rem 0;
  }
}

.center{
  text-align:center;
}
</style>