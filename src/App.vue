<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view id="content"/>
    </transition>
    <div class="whats-app-button" @click="wappAction">
      <div class="whats-app-icon" />
    </div>
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
  methods: {
    wappAction() {
      window.open('https://whats.link/nmarquiteto', '_blank');
    },
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
  .whats-app-button {
    position: fixed;
    right: 15px;
    bottom: 25px;
    height: 70px;
    width: 70px;
    background-color: $light;
    border-radius: 100%;
    z-index: 999;
    box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
    .whats-app-icon {
      position: absolute;
      left: calc(50% - 15px);
      top: calc(50% - 15px);
      width: 30px;
      height: 30px;
      background: url('assets/icons/whatsapp.svg');
      background-size: 30px 30px;
      background-repeat: no-repeat;
    }
    &:hover {
      cursor: pointer;
    }
  }
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
