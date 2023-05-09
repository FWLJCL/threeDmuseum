<template>
  <div class="header-boss">
    <div class="name-header">物品名称：金玉石</div>
    <model-obj
      src="/model/model.obj"
      :width="1500"
      :height="960"
    ></model-obj>
  </div>
</template>
<script>
import { ModelObj } from "vue-3d-model";
export default {
  components: {
    ModelObj,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.header-boss{
  margin-top: 100px;
  margin-left: 20px;
}

.name-header{
  font-size: 25px;
  margin-bottom: 20px;
}
</style>
