<template>
  <div class="box">
    <div class="box-content">
      <div class="left">
        <div class="left-box">
          <div class="margin-top color-white">问题描述</div>
          <el-input
            class="margin-top"
            v-model="input1"
            type="textarea"
            placeholder="请输入内容"
          ></el-input>
          <el-upload
            class="avatar-uploader margin-top"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="margin-top">* 支持.jpg,.png格式 但不能超过9MB</div>
          <div class="margin-top color-white">联系方式</div>
          <el-input
            v-model="input2"
            placeholder="请输入内容"
            class="neirong"
          ></el-input>
          <el-button class="margin-top color-white">提交反馈</el-button>
        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <div class="flex flex-header">
            <div class="flex-div1">常见问题</div>
            <div class="flex-div2"><div class="flex-more" @click="questionAction()">更多</div></div>
          </div>
          <div class="flex flex-border" v-for="(item, index) in 5" :key="index">
            <div class="flex-div1">常见问题A题目</div>
            <div class="flex-div2">2022年02月24日</div>
          </div>
        </div>
        <div class="right-bottom">
            <div class="lianxi">联系我们</div>
            <div class="lianxifangshi">手机号：</div>
            <div class="lianxifangshi">QQ：</div>
            <div class="lianxifangshi">微信：</div>
            <div class="lianxifangshi">邮箱：</div>
            <div class="lianxifangshi">微博：</div>
            <div class="lianxifangshi">空间：</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    questionAction(){
      this.$router.push("/question")
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style scoped>
.flex {
  display: inline-flex;
  width: 90%;
  height: 30px;
  align-items: center;
  color: #d2bfb2;
  margin-left: 5%;
}

.flex-header {
  height: 70px;
}

.flex-more {
  width: 100px;
  height: 40px;
  border: 1px #93706f solid;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.flex-more:hover{
  cursor: pointer;

}

.flex-border {
  border: 1px #d2bfb2 solid;
  border-radius: 10px;
  margin-top: 10px;
}

.flex-div1 {
  width: 50%;
  flex-grow: 1;
  text-indent: 10px;
}

.flex-div2 {
  width: 50%;
  text-align: right;
  display: inline-flex;
  justify-content: flex-end;
  margin-right: 10px;
  flex-grow: 1;
}

.neirong {
  margin-top: 5px;
}
.color-white {
  color: white;
}
.margin-top {
  display: block;
  margin-top: 20px;
}
.avatar-uploader {
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  background: white;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.box-content .left {
  width: 50%;
  height: 100%;
  background: #9b7e53;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
}

.left-box {
  width: 90%;
  margin-left: 5%;
}

.box-content .right {
  width: 50%;
  height: 100%;
  margin-left: 50px;
  display: inline-flex;
  flex-direction: column;
}

.right .right-top {
  height: 50%;
  width: 100%;
  background: #6c2623;
  overflow: auto;
}

.box-content {
  width: 100%;
  height: 900px;
  display: inline-flex;
}

.right .right-bottom {
  height: 50%;
  width: 100%;
  background: #2a3849;
  overflow: auto;
  color: #f0dda8;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.lianxifangshi{
  margin-top: 20px;
}

.lianxi{
  margin-bottom: 20px;
  font-size: 30px;
}

.box {
  margin-top: 100px;
  width: 90%;
  margin-left: 5%;
}
</style>