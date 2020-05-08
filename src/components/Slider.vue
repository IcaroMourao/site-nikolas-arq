<template>
  <div class="slider-container">
    <Slick ref="slick" :options="slickOptions">
      <a><img src="@/assets/images/slider/image1.jpeg" width="100%" alt=""></a>
      <a><img src="@/assets/images/slider/image2.jpeg" width="100%" alt=""></a>
    </Slick>
  </div>
</template>

<script>
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import Slick from 'vue-slick';

export default {
  name: 'Slider',
  components: {
    Slick,
  },
  data() {
    return {
      slickOptions: {
        arrows: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'slick-dots',
        fade: false,
        pauseOnFocus: false,
        pauseOnHover: false,
      },
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../node_modules/slick-carousel/slick/slick.css';

.slick-dots {
  top: 2%;
  bottom: none;
  li {
    button {
      &:before {
        font-size: 9px;
      }
    }
    &.slick-active {
      button {
        &:before {
          font-size: 9px;
          color: $light;
          opacity: 1;
        }
      }
    }
  }
}

.slick-prev {
  left: 25px;
}

.slick-next {
  right: 55px;
}

.slick-next,
.slick-prev {
  z-index: 100;

  &:before{
    font-size: 30px;
  }
}

</style>
