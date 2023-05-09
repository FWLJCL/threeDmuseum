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
  height: 92%;
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
          title: "关于我们",
          href: "/news/overview",
        },
        {
          title: "通知公告",
          href: "/news/announcement",
        },
        {
          title: "专栏集锦",
          href: "/news/collection",
        },
      ],
    };
  },
};
</script>