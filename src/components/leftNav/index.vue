<template>
  <div class="box">
    <div class="left-boss" v-for="(item, index) in list" :key="index">
        <router-link class="router-link-boss" :to="item.href">
            {{ item.title }}
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
        }
    }
};
</script>

<style scoped>
.left-boss{
    width: 95%;
    margin: 0px auto;
}
.box {
  width: 100%;
  height: 100%;
  background: #6c2623;
  color: #bd8b54;
  font-size: 22px;
}

.router-link-boss{
  color: #bd8b54;
  text-decoration: none;
  margin-top: 10px;
  display: inline-flex;
  width: 90%;
  margin-left: 5%;
  padding: 10px 0 ;
}

.router-link-boss:hover{
    cursor: pointer;
    background-color: #bd8b54;
    color: #6C2623;
}
</style>