<template>
  <div class="slider-container">
    <div class="carousel">
      <div class="slide">
        <img src="@/assets/images/slider/image1.jpeg" width="100%" alt="">
      </div>
      <div class="slide">
        <img src="@/assets/images/slider/image2.jpeg" width="100%" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import '../../node_modules/slick-carousel/slick/slick.css';

export default {
  name: 'Slider',
  components: {
  },
  data() {
    return {
      slickOptions: {

      },
    };
  },
  mounted() {
    $(document).ready(() => {
      $('.carousel').slick({
        arrows: false,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        fade: false,
        pauseOnFocus: false,
        pauseOnHover: false,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.slider-container {
  .carousel {
    max-width: 1000px;
    margin: auto;
    .slide {
    }
  }
}
</style>
