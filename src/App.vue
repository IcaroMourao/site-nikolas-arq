<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view id="content"/>
    </transition>
    <WhatsAppButton />
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import WhatsAppButton from '@/components/WhatsAppButton.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    WhatsAppButton,
  },
  methods: {
    ...mapActions({
      storeUser: 'user/storeUser',
      loadUser: 'user/loadUser',
    }),
    storeToken(key, value) {
      this.$cookies.set(key, value, '3y');
    },
    generateId() {
      const uuid = this.$uuid.v1();
      return this.storeUser({ id: uuid })
        .then(() => {
          this.storeToken('uuid', uuid);
        });
    },
  },
  created() {
    if (!this.$cookies.isKey('uuid')) {
      this.generateId()
        .then(() => {
          this.loadUser({ id: this.$cookies.get('uuid') });
        });
    } else {
      this.loadUser({ id: this.$cookies.get('uuid') });
    }
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
