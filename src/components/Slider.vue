<template>
  <div class="slider-container">
    <Slick ref="slick" :options="slickOptions ? slickOptions : slickDefault">
      <a v-for="(item, index) in items" :key="index">
        <img
          class="slider-image"
          @click="triggerSlideShow(index)"
          :src="getImage(item)"
          width="100%"
          :alt="item.name">
      </a>
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
  props: {
    items: {
      type: Array,
      required: true,
    },
    slickOptions: {
      type: Object,
    },
  },
  data() {
    return {
      slickDefault: {
        arrows: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
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
    getImage(item) {
      return item.img;
    },
    triggerSlideShow(index) {
      this.$emit('open-slide-show', index);
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

.slider-image {
  cursor: pointer;
}

.slick-slider {
  margin: 0 !important;
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

.slideshow-div {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  z-index: 1000;
}

</style>
