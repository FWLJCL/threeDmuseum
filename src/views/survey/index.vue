<template>
  <div class="container-boss">
    <div class="left-nav-boss">
      <leftNav :list="list"></leftNav>
    </div>
    <div class="right-content"><router-view></router-view></div>
  </div>
</template>

<style scoped>
.left-nav-boss {
  width: 17%;
  height: 100%;
  color: #bd8b54;
  font-size: 30px;
}

.right-content{
  width: 83%;
  height: 100%;
  overflow: auto;
}
.container-boss {
  position: absolute;
  top: 70px;
  width: 100%;
  height: 100%;
  z-index:-99;
  overflow: auto;
  display: inline-flex;
}
</style>

<script>
import leftNav from "../../components/leftNav/index.vue";
export default {
  components: {
    leftNav,
  },
  data() {
    return {
      list: [
        {
          title: "本馆概况",
          href: "/survey/overview",
        },
        {
          title: "馆内设施",
          href: "/survey/museum",
        },
        {
          title: "游览须知",
          href: "/survey/instructions",
        },
      ],
    };
  },
};
</script>