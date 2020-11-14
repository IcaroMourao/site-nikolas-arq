<template>
  <div class="home-container">
    <Slider :items="items" />
    <Contacts />
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import Contacts from '@/components/Contacts.vue';
import HomeItems from '@/items/HomeItems';

export default {
  name: 'Home',
  components: {
    Slider,
    Contacts,
  },
  data() {
    return {
      items: HomeItems.items,
    };
  },
};
</script>
