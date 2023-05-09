<template>
  <div class="box">
    <div class="swiper-boss">
      <el-carousel height="700px">
        <el-carousel-item v-for="(item,index) in imageList" :key="item">
          <img class="img-src" :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content-boss">
      <div class="content-boss-left">
        <div class="left-boss left-top">
          <div class="left"><div class="left-title">资讯</div></div>
          <div class="right">这是一篇资讯文章的标题</div>
        </div>
        <div class="left-boss left-bottom">
          <div class="huodong-boss">
            <div class="left-title">活动</div>
            <div class="shuodong-content"></div>
          </div>
        </div>
      </div>
      <div class="left-boss content-boss-right">
        <div class="left border-none right-left-image-boss">
          <img
            class="right-image"
            src="https://img.zcool.cn/community/0136145d9de207a8012060bed401e0.jpg@3000w_1l_0o_100sh.jpg"
          />
        </div>
        <div class="right right-huodong">数字藏宝阁</div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.img-src{
  width: 100%;
  height: 700px;
}
.left-boss {
  display: inline-flex;
  align-items: center;
  height: 100%;
}
.left-boss .left {
  width: 50%;
  border-right: 1px white solid;
  height: 90%;
}

.huodong-boss {
  border-right: none !important;
  width: 100%;
  height: 100%;
}

.right {
  height: 90%;
  width: 50%;
  margin-left: 5%;
  color: white;
}
.left-title {
  font-size: 45px;
  color: #d0ad6e;
  margin-left: 10px;
}

.border-none {
  border: none !important;
}

.right-image {
  width: 100%;
  height: 100%;
}

.right-huodong {
  color: #d0ad6e;
  font-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.right-left-image-boss {
  margin-left: 5%;
}

.shuodong-content {
  color: white;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
}
.box {
  margin-top: 100px;
  width: 90%;
  margin-left: 5%;
}

.swiper-boss {
  background: #ccc;
}

.content-boss {
  display: inline-flex;
  width: 100%;
  height: 600px;
  overflow: auto;
  margin-top: 20px;
  margin-bottom: 40px;
}

.content-boss-left {
  width: 40%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
}

.content-boss-right {
  width: 60%;
  margin-left: 5%;

  background: #420704;
}

.left-top {
  width: 100%;
  height: 60%;
  background: #6c2623;
}

.left-bottom {
  width: 100%;
  height: 60%;
  background: #9b7e53;
  margin-top: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      imageList:[
        "https://img.zcool.cn/community/013fc45d9de1ffa801211d53b880eb.jpg@3000w_1l_0o_100sh.jpg",
        "https://ts1.cn.mm.bing.net/th/id/R-C.fb4b80285e50f690d65159cb05c793af?rik=2C8mMVb8Xoa7SA&riu=http%3a%2f%2fwww.nmgbtbwg.cn%2fuploadfile%2f2020%2f1019%2f20201019095010155.jpg&ehk=i1hHzq4BwNj7j0qxa1WPDPx9oa%2brjyHvVw%2fJBByq1X4%3d&risl=&pid=ImgRaw&r=0",
        "https://ts1.cn.mm.bing.net/th/id/R-C.bd3f4c8027fa171682e3b64ccaeceb45?rik=M34%2b8Ewa7%2bv1gA&riu=http%3a%2f%2fimg1.voc.com.cn%2fUpLoadFile%2f2016%2f09%2f17%2f20160917154501826.jpg&ehk=0OfKb1FxAi%2fVUwWO68W7AHKY%2fCQkJHXOQKjdcwtzGHg%3d&risl=&pid=ImgRaw&r=0",


      ]
    };
  },
};
</script>