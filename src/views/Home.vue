<template>
  <div class="home-container">
    <Slider/>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  name: 'Home',
  components: {
    Slider,
  },
};
</script>

<style>
  .home-container {
    padding: 2rem;
  }
</style>
