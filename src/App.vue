<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view id="content"/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./global/scss/base-styles.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/bootstrap-vue/src/index.scss";

#app {
  width: 100%;
  height: 100%;
  background-color: $app-background;
}

#content {
  min-height: calc(100vh - 180px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
