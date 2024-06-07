<template>
  <TopNav />
  <div class="" style="padding-top: 66px;">
    <router-view />
  </div>
</template>
<script>
import TopNav from '@/components/landing/TopNav.vue'
export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
