<template>
  <DashboardNav v-if="!hide"/>
  <!-- <TopNav /> -->
  <!-- <div class="" style="padding-top: 66px;"> -->
  <router-view />
  <!-- </div> -->
</template>
<script>
import DashboardNav from '@/components/DashboardNav.vue';

// import TopNav from '@/components/landing/TopNav.vue'
export default {
  name: 'App',
  components: {
    DashboardNav,
    // TopNav
  },
  computed: {
    hide() {
      const hiddenPages = ['DemoPage1','ThankYou']
      return hiddenPages.includes(this.$route.name)
    },
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

:root {
  --bg-primary: #014c75;
  --bg-secondary: #EB5E28;
  --bg-tertiary: #FEC007;
  --bg-forth: #FBF4F4;
}

.smaller {
  font-size: 10px;
}
</style>
