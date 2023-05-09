<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>

import headerNav from './components/header/index.vue'
export default {
  name: 'App',
  components: {
    headerNav
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

body,html{
  background:#e8eadd;
}
#app {
  height: auto;
  width: 100%;
}
</style>
