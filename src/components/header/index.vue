<template>
  <div class="header-boss">
    <div class="header-box">
      <div class="header-title1">上海民俗博物馆</div>
      <div class="headder-title-right">
        <div class="header-title" @click="herfRouter('/')">首页</div>
        <div class="header-title">
          <el-dropdown>
            <span  class="el-dropdown-link">
              概况<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><div @click="herfRouter('/survey/overview')">本馆概况</div></el-dropdown-item>
              <el-dropdown-item><div @click="herfRouter('/survey/museum')">馆内设施</div></el-dropdown-item>
              <el-dropdown-item><div @click="herfRouter('/survey/instructions')">游览须知</div></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-title">
          <el-dropdown>
            <span class="el-dropdown-link" >
              资讯<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><div @click="herfRouter('/news/overview')">关于我们</div></el-dropdown-item>
              <el-dropdown-item><div @click="herfRouter('/news/announcement')">通知公告</div></el-dropdown-item>
              <el-dropdown-item><div @click="herfRouter('/news/collection')">专栏集锦</div></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-title cangping" >
          <el-dropdown>
            <span @click="herfRouter('/shuhuaA')" class="el-dropdown-link">
              藏品
            </span>
          </el-dropdown>
        </div>
        <div class="header-title">
          <el-dropdown>
            <span class="el-dropdown-link" >
              活动<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click="herfRouter('/zaiqi')">在期展览</span></el-dropdown-item>
              <el-dropdown-item>往期展览</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="header-title">
          <el-dropdown>
            <span class="el-dropdown-link" @click="herfRouter('/zixun')">
              咨询
            </span>
          </el-dropdown>
        </div>
        <div class="header-title2"><i class="el-icon-search"></i></div>
        <div class="header-title2"><i class="el-icon-s-check"></i></div>
      </div>
    </div>
  </div>
</template>


<style  scoped>
.gaikuang {
  color: black;
}

.el-dropdown-link {
  color: white;
}

.header-boss {
  height: 70px;
  display: inline-flex;
  align-items: center;
  background-color: rgb(160,133,119,0.5);
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
}

.header-box {
  width: 90%;
  display: inline-flex;
  color: white;
  margin-left: 5%;
  height: 100%;
  align-items: center;
}

.headder-title-right {
  width: 40%;
  display: inline-flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
}

.header-title1 {
  width: 60%;
  font-size: 32px;

}

.header-title2 {
  width: 5%;
}

.header-title:hover{
  cursor: pointer;
}

.header-title {
  width: 13%;
  height: 100%;
  display: inline-flex;
  align-items: center;
}

.cangping{
  text-align: center !important;
}
</style>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 头部路由跳转
    herfRouter(data) {
      this.$router.push(data);
    },
  },
};
</script>