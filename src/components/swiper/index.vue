<template>
  <div id="swipercom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in imgs" :key="i">
          <img :src="item.pic" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css"; //引入swiper样式
import Swiper from "swiper"; //引入swiper
export default {
  name: "Swiper",
  data() {
    return {
      imgs: [
        { pic: require("../assets/img/swiper1.jpg") },
        { pic: require("../assets/img/swiper2.jpg") },
        { pic: require("../assets/img/swiper3.png") },
      ],
    };
  },
  mounted() {
    var mySwiper = new Swiper("#swiperIndex", {
      //配置分页器内容

      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination", //换页器与哪个标签关联
        clickable: true, //分页器是否可以点击
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      //如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style >
#swipercom {
  width: 100%;
}

#swiperIndex.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  background-color: orangered;
}
</style>
