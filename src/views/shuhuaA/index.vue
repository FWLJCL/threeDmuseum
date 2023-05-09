<template>
  <div class="cangping-box">
    <el-carousel
      class="margin-header"
      :interval="4000"
      type="card"
      height="400px"
    >
      <el-carousel-item v-for="item in listA" :key="item.id">
        <img :src="item" class="image" />
      </el-carousel-item>
    </el-carousel>

    <div class="choose border">
      <div class="choose-div tag-boss">
        <el-select v-model="value" placeholder="工艺分类">
          <el-option
            v-for="item in gongyiType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="choose-div tag-boss">
        <el-select v-model="value2" placeholder="标签分类">
          <el-option
            v-for="item2 in tagType"
            :key="item2.value"
            :label="item2.label"
            :value="item2.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="choose-div tag-boss name-user">
        <span>名称</span>
        <el-input placeholder="名称" v-model="name" clearable> </el-input>
        <el-button class="search-btn" icon="el-icon-search" circle></el-button>
      </div>
    </div>

    <div class="choose-image border">
      <div
        v-for="(item, index) in listImage"
        :key="index"
        class="choose-iamge-div"
      >
        <img @click="shuhuaBAction(index)" class="image-content" :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value2: "",
      name: "",
      listA: [
        "https://img.dpm.org.cn/Uploads/Picture/2017/02/04/s58958acc719bc.jpg",
        "https://p1.ssl.qhimg.com/t018a49370d047e9aa6.jpg",
        "https://ts1.cn.mm.bing.net/th/id/R-C.cb43f592b84c7ecf8533bede07b574a7?rik=FI%2bZP5kS1j6XNQ&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20140523%2f20140523112428-884671043.jpg&ehk=gudTz%2fqqXH7laJnQt%2bwpJV46Pr9lJ0K%2bEB%2fAzVRpI%2fs%3d&risl=&pid=ImgRaw&r=0",
      ],
      gongyiType: [
        {
          label: "书画",
          value: 0,
        },
        {
          label: "珐琅器",
          value: 1,
        },
        {
          label: "牌匾",
          value: 2,
        },
        {
          label: "玉石金器",
          value: 3,
        },
        {
          label: "编织",
          value: 4,
        },
        {
          label: "生活用品",
          value: 5,
        },
        {
          label: "上装·配饰",
          value: 6,
        },
      ],
      tagType: [
        {
          label: "标签1",
          value: 0,
        },
        {
          label: "标签2",
          value: 1,
        },
        {
          label: "标签3",
          value: 2,
        },
        {
          label: "标签4",
          value: 3,
        },
        {
          label: "标签5",
          value: 4,
        },
        {
          label: "标签6",
          value: 5,
        },
        {
          label: "标签7",
          value: 6,
        },
      ],
      listImage: [
        {
          id: "0",
          image:
            "https://img1.baidu.com/it/u=3589289863,382844864&fm=253&fmt=auto&app=138&f=JPEG?w=334&h=500",
        },
        {
          id: "1",
          image: "http://www.lymsmuseum.cn/upload/collect/20200606/111f22362fda9dd1e0af2316c8a18eae.jpg",
        },
        {
          id: "2",
          image:
            "https://ts1.cn.mm.bing.net/th/id/R-C.cb43f592b84c7ecf8533bede07b574a7?rik=FI%2bZP5kS1j6XNQ&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20140523%2f20140523112428-884671043.jpg&ehk=gudTz%2fqqXH7laJnQt%2bwpJV46Pr9lJ0K%2bEB%2fAzVRpI%2fs%3d&risl=&pid=ImgRaw&r=0",
        }, {
          id: "3",
          image:
            "https://img.dpm.org.cn/Uploads/Picture/2017/02/04/s58958acc719bc.jpg",
        },
        {
          id: "4",
          image: "https://p1.ssl.qhimg.com/t018a49370d047e9aa6.jpg",
        },
        // {
        //   id: "2",
        //   image:
        //     "http://www.lymsmuseum.cn/upload/image/20230202/1675323699766235.jpg",
        // }, {
        //   id: "0",
        //   image:
        //     "https://img.dpm.org.cn/Uploads/Picture/2017/02/04/s58958acc719bc.jpg",
        // },
        // {
        //   id: "1",
        //   image: "https://p1.ssl.qhimg.com/t018a49370d047e9aa6.jpg",
        // },
        // {
        //   id: "2",
        //   image:
        //     "https://ts1.cn.mm.bing.net/th/id/R-C.cb43f592b84c7ecf8533bede07b574a7?rik=FI%2bZP5kS1j6XNQ&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20140523%2f20140523112428-884671043.jpg&ehk=gudTz%2fqqXH7laJnQt%2bwpJV46Pr9lJ0K%2bEB%2fAzVRpI%2fs%3d&risl=&pid=ImgRaw&r=0",
        // }, {
        //   id: "0",
        //   image:
        //     "https://img.dpm.org.cn/Uploads/Picture/2017/02/04/s58958acc719bc.jpg",
        // },
        // {
        //   id: "1",
        //   image: "https://p1.ssl.qhimg.com/t018a49370d047e9aa6.jpg",
        // },
        // {
        //   id: "2",
        //   image:
        //     "https://ts1.cn.mm.bing.net/th/id/R-C.cb43f592b84c7ecf8533bede07b574a7?rik=FI%2bZP5kS1j6XNQ&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20140523%2f20140523112428-884671043.jpg&ehk=gudTz%2fqqXH7laJnQt%2bwpJV46Pr9lJ0K%2bEB%2fAzVRpI%2fs%3d&risl=&pid=ImgRaw&r=0",
        // },
      ],
    };
  },
  methods:{
    shuhuaBAction(index){
      if (index == "0") {
        this.$router.push('/shuhuaB/index');
      } else if (index == "1") {
        this.$router.push('/shuhuaB/index2');
      }else if (index == "2") {
        this.$router.push('/shuhuaB/index3'); 
    }else if (index == "3") {
        this.$router.push('/shuhuaB/index4');
  }else if (index == "4") {
        this.$router.push('/shuhuaB/index5');
    }
  }
}
};
</script>

<style  scoped>
img {
  width: 100%;
  height: 100%;
}
.choose-image {
  height: 300px;
  margin-top: 20px;
  width: 100%;
  display: inline-flex;
  flex-wrap:wrap;
}

.choose-iamge-div {
  flex-grow: 1;
  height: 100%;
  margin-left: 1%;
  min-width: 20%;
  margin-top: 20px;
}

.image-content:hover{
  cursor: pointer;
}

.choose-iamge-div:nth-of-type(1) {
  margin-left: 0px;
}
.border {
}
.image-boss {
  height: 300px;
}
.margin-header {
  margin-top: 60px;
}
.image {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-select {
  width: 100%;
}
.cangping-box {
  width: 80%;
  margin: 0 auto;
  position: relative;
  top: 40px;
  
}
.search-btn {
  margin-left: 10px;
}
.name-user {
  display: inline-flex;
}

.name-user span {
  display: inline-flex;
  width: 50px;
  align-items: center;
}
.choose {
  display: inline-flex;
  width: 100%;
  height: 100px;
  align-items: center;
}

.choose-div {
  flex-grow: 1;
  margin-left: 10px;
}
.car-list {
  margin-top: 58px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

::v-deep .el-carousel__container,
::v-deep .el-carousel-item,
::v-deep .el-carousel-item {
  width: 100%;
  height: 100%;
}
.img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
</style>