<template>
  <div class="projects-container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Projects',
};
</script>

<style lang="scss" scoped>

.projects-container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  padding-bottom: 6rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
