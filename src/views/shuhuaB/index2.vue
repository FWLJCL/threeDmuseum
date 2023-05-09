<template>
    <div class="cangpingB">
      <div class="cangpingB-box">
        <div class="box-content left">
          <div class="box-image">
            <img  
              src="../../../static/img/4.jpg"
            />
            <div class="img-footer">
              <i class="el-icon-zoom-in"></i>
              <i class="el-icon-video-play el-right-icon" @click="threeAction()"></i>
            </div>
          </div>
        </div>
        <div class="box-content right">
          <div class="box-content-height name">index2的内容</div>
          <div class="box-content-height">上传人：index2</div>
          <div class="box-content-height">所属时期：index2</div>
          <div class="box-content-height">藏品分类：index2</div>
          <div class="box-content-height">藏品标签：index2</div>
          <div class="box-content-height">涉及本藏品的展览：</div>
          <div class="right-image">
            <img @click="go_other2()" 
              src="../../../static/img/5.jpg"
            />
          </div>
          <div class="box-content-height zhanlan">展览A</div>
          <div class="box-content-height">相关藏品的展览</div>
          <div class="right-image">
            <img @click="go_other2()"
              src="../../../static/img/6.jpg"
            />
          </div>
          <div class="box-content-height zhanlan">相关藏品B</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    },
    methods:{
      threeAction(){
        this.$router.push("/coll")
      },
      go_other2(){
        this.$router.push("/other2")
      }
    }
  };
  </script>
  
  <style scoped>
  .el-right-icon:hover{
    cursor: pointer;
  }
  .cangpingB {
    width: 90%;
    margin-top: 90px;
    margin-left: 5%;
  }
  
  .cangpingB-box {
    width: 100%;
    display: inline-flex;
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
  
  .right-image img{
    width: 30%;
    height:auto;
  }
  
  .box-content-height {
    height: 50px;
  }
  
  .name {
    font-size: 30px;
    font-weight: 600;
  }
  
  .img-footer{
    width: 100%;
    display: inline-flex;
    position: relative;
    top: -35px;
    color: white;
    font-size: 22px;
    justify-content: flex-end;
  }
  
  .img-footer i{
    margin-right: 10px;
  }
  </style>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  