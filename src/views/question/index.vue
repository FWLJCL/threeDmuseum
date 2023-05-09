<template>
  <div class="box">
    <div class="header-null">常见问题</div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        v-for="(item, index) in 4"
        class="padding-box"
        :key="index"
        title="这是一个已解决的问答标题"
        :name="index"
      >
        <div class="content">这是问题描述内容</div>
        <div class="content">这是问题描述内容</div>
        <div class="content">操作步骤：</div>
        <div class="content">1、这是问题回答的内容....</div>
        <div class="content">2、这是问题回答的内容....</div>
        <div class="content">3、这是问题回答的内容....</div>
        <div class="image-boss"></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
.content{
  margin-top: 10px;
}
.header-null {
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
  color: #f0ebdb;
}

::v-deep .el-collapse-item__wrap{
  background-color: #F0EBDB;
}
.box {
  width: 95%;
  margin-top: 100px;
  background: #6c2623;
  margin-left: 2.5%;
  padding-bottom: 100px;

}

.el-collapse {
  width: 95%;
  margin: 0 auto;
}

::v-deep .el-collapse-item__header {
  background-color: #dcd1cf;
  color: #6c2623;
  padding-left: 2.5%;
}

::v-deep .el-collapse-item__content {
  width: 95%;
  margin: 0 auto;
  background: #f0ebdb;
}
.padding-box {
}

.image-boss {
  width: 100%;
  height: 300px;
  background: #ccc;
}
</style>