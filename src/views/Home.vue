<template>
  <div class="home-container">
    <Slider :items="items" />
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import HomeItems from '@/items/HomeItems';

export default {
  name: 'Home',
  components: {
    Slider,
  },
  data() {
    return {
      items: HomeItems.items,
    };
  },
};
</script>

<style>

</style>
