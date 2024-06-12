<template>
  <DashboardNav v-if="!hide" />
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
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage']
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

.cutout {
  overflow: hidden;
  text-align: center;
}

.cutout>span {
  position: relative;
  display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 900px;
  /* Adjust width as needed */
  margin: 0 20px;
}

.cutout>span:before {
  right: 100%;
  border-bottom: 2px solid;
  border-color: var(--bg-secondary);
  border-image-slice: 1;
}

.cutout>span:after {
  left: 100%;
  border-bottom: 2px solid;
  border-color: var(--bg-secondary);
  border-image-slice: 1;
}
</style>
