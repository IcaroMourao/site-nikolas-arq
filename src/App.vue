<template>
  <div id="all">
    <div id="app">
      <Header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./global/scss/base-styles.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/bootstrap-vue/src/index.scss";

#all {
  width: 100%;
  height: 100%;
  background-color: $app-background;
}
#app {
  min-height: 100vh;
  background-color: $app-background;
}

</style>
