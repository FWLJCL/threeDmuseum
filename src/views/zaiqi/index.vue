<template>
  <div class="cangpingB">
    <div class="zhanlan-title">
      <div class="zhanlan-title-div">
        <div class="slect-type slect-type-qita"  @click="quanbu()"></div>
        全部
      </div>
      <div class="zhanlan-title-div">
        <div class="slect-type slect-type-qita"></div>
        往期展览
      </div>
      <div class="zhanlan-title-div">
        <div class="slect-type slect-type-all"></div>
        在期展览
      </div>
    </div>
    <div class="cangpingB-box">
      <div class="box-content left">
        <div class="box-image">
          <img
            src="https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171107/2717f307c46d42658f4b2e56295e009b.jpg"
          />
          <div class="img-footer">
            <i class="el-icon-zoom-in"></i>
            <i
              class="el-icon-video-play el-right-icon"
              @click="threeAction()"
            ></i>
          </div>
        </div>
      </div>
      <div class="box-content right">
        <div class="box-content-height name">展览名称：玉石金器主题展</div>
        <div class="box-content-height">展览状态：在期</div>
        <div class="box-content-height">展览时间：2023年3月1日-2023年3月17日</div>
        <div class="box-content-height">展览所在场馆：仪仗用具馆</div>
        <div class="box-content-height">展览简介：古董</div>
        <div class="box-content-height sheji">展览所涉及的藏品：</div>
        <div
          class="zhanlan-content"
          v-for="(item2, index2) in bossIndex"
          :key="index2"
        >
          <div
            class="zhanlan-content-div"
            v-for="(item, index) in 3"
            :key="index"
          >
            <div class="image-header">
              <img
                src="https://img1.baidu.com/it/u=3589289863,382844864&fm=253&fmt=auto&app=138&f=JPEG?w=334&h=500"
              />
            </div>
            <div class="footer-content">
              <div class="footer-content-div" >玉石金器</div>
              <div class="footer-content-div">上传人：admin</div>
              <div class="footer-content-div">材质：玉石</div>
            </div>
          </div>
        </div>
        <div class="footer-btn" @click="moreAction()">
          <el-button>更多</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bossIndex: 3,
    };
  },
  methods: {
    threeAction() {
      this.$router.push("/coll");
    },
    quanbu(){
      this.$router.push('/zhanlan')
    },
    moreAction() {
      this.bossIndex = this.bossIndex + 3;
    },
  },
};
</script>

<style scoped>
.sheji{
  height: 20px !important;
}
.slect-type {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.slect-type:hover {
  cursor: pointer;
}

.slect-type-qita {
  background: #c3b69b;
}

.slect-type-all {
  background: #9b7e53;
}
.footer-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.footer-content {
  padding: 10px;
}
.image-header {
  width: 100%;
  height: 70%;
  background: white;
}
.zhanlan {
  width: 90%;
  margin-left: 5%;
  margin-top: 60px;
}
.zhanlan-title {
  display: inline-flex;
  width: 40%;
  margin-left: 30%;
  padding: 10px 0;
  font-size: 20px;
}

.zhanlan-title-div {
  flex-grow: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.footer-content-div {
  margin-top: 4px;
}

.zhanlan-content {
  display: inline-flex;
  width: 100%;
}

.zhanlan-content-div {
  width: 100%;
  margin-left: 1%;
  height: 300px;
  background: white;
  border-radius: 10px;
}
.zhanlan-content {
  display: inline-flex;
  width: 100%;
  margin-top: 20px;
}

.zhanlan-content-div {
  width: 100%;
  margin-left: 1%;
  height: 300px;
  background: white;
  border-radius: 10px;
}
.zhanlan-title {
  display: inline-flex;
  width: 40%;
  margin-left: 30%;
  padding: 10px 0;
  font-size: 20px;
}

.zhanlan-title-div {
  flex-grow: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.slect-type {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.slect-type:hover {
  cursor: pointer;
}

.slect-type-qita {
  background: #c3b69b;
}

.slect-type-all {
  background: #9b7e53;
}
.el-right-icon:hover {
  cursor: pointer;
}
.cangpingB {
  width: 90%;
  margin-top: 80px;
  margin-left: 5%;
}

.cangpingB-box {
  width: 100%;
  display: inline-flex;
  margin-top: 20px;
}

.box-content {
  flex-flow: 1;
}

.left {
  width: 40%;
}

.right {
  width: 60%;
}

.box-image {
  width: 95%;
  height: 400px;
}

.zhanlan {
  line-height: 50px;
}

.box-image img {
  width: 100%;
  height: 100%;
}

.right-image {
}

.box-content-height {
  height: 50px;
}

.name {
  font-size: 30px;
  font-weight: 600;
}

.img-footer {
  width: 100%;
  display: inline-flex;
  position: relative;
  top: -35px;
  color: white;
  font-size: 22px;
  justify-content: flex-end;
}

.img-footer i {
  margin-right: 10px;
}
</style>














