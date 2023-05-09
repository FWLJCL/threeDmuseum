<template>
  <div class="zhanlan">
    <div class="zhanlan-title">
      <div class="zhanlan-title-div"><div class="slect-type slect-type-all" @click="quanbu()"></div>全部</div>
      <div class="zhanlan-title-div"><div class="slect-type slect-type-qita"></div>往期展览</div>
      <div class="zhanlan-title-div" @click="zaiqiAction()"><div class="slect-type slect-type-qita"></div>在期展览</div>
    </div>

    <div class="zhanlan-content" v-for="(item2,index2) in bossIndex" :key="index2">
      <div class="zhanlan-content-div" v-for="(item,index) in 3" :key="index" >
        <div class="image-header"><img src="https://img1.baidu.com/it/u=3589289863,382844864&fm=253&fmt=auto&app=138&f=JPEG?w=334&h=500"/></div>
        <div class="footer-content">
          <div class="footer-content-div">玉石金器</div>
          <div class="footer-content-div">展览时间：2023-02-23</div>
          <div class="footer-content-div">展览地点：中国</div>
        </div>
      </div>
    </div>

    <div class="footer-btn" @click="moreAction()"> <el-button>更多</el-button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bossIndex:3
    };
  },
  methods:{
    moreAction(){
      this.bossIndex=this.bossIndex+3
    },
    zaiqiAction(){
      this.$router.push('/zaiqi')
    },
    quanbu(){
      this.$router.push('/zhanlan')

    }
  }
};
</script>

<style scoped>
.slect-type{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.slect-type:hover{
  cursor: pointer;
}

.slect-type-qita{
  background: #C3B69B;
}

.slect-type-all{
  background: #9B7E53;
  
}
.footer-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
img{
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

}
.footer-content{
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
  margin-top: 80px;
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

.footer-content-div{
  margin-top: 10px;
}

.zhanlan-content {
  display: inline-flex;
  width: 100%;
  margin-top: 20px;
}

.zhanlan-content-div {
  width: 33%;
  margin-left: 1%;
  height: 500px;
  background: white;
  border-radius: 10px;
}
</style>