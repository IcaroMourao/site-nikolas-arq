<template>
  <div class="about-container app-container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'About',
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

</style>
