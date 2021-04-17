<template>
  <div class="projects-container app-container">
    <Loader v-if="isProjectsRequesting || !isUserLoaded" :fullScreen="true"/>
    <transition v-else name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/Loader.vue';

export default {
  name: 'Projects',
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      isProjectsRequesting: 'project/getIsProjectsRequesting',
      isUserLoaded: 'user/getIsUserLoaded',
    }),
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.projects-container {
  position: relative;
}

</style>
