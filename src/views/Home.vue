<template>
  <div class="home-container">
    <Slider :items="items" />
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import HomeHelper from '@/helpers/HomeHelper';

export default {
  name: 'Home',
  components: {
    Slider,
  },
  data() {
    return {
      items: HomeHelper.items,
    };
  },
};
</script>

<style>

</style>
