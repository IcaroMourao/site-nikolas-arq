<template>
<div class="services-container page-content overflow-hidden">
  <div class="services-header">
    <h1 class="title">Outros Serviços</h1>
  </div>
  <div class="services-items">
    <Slick :options="slickOptions" class="inner-services-slider">
      <div
        class="services-box-slick-container"
        v-for="(service, index) in services"
        :key="index">
        <div class="services-item">
          <div class="service-image">
            <img :src="service.image" alt="service">
          </div>
          <div class="service-description">
            <p class="service-title">{{ service.title }}</p>
            <p class="service-body">{{ service.description }}</p>
            <div class="service-link-wrapper">
              <router-link
                class="service-link"
                to="/outros-servicos/contato">
                  Contate-nos >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </Slick>
  </div>
</div>
</template>

<script>
import ServiceItems from '@/items/ServiceItems';
import Slick from 'vue-slick';

export default {
  name: 'Services',
  components: {
    Slick,
  },
  data() {
    return {
      services: ServiceItems.services,
      slickOptions: {
        prevArrow: false,
        nextArrow: false,
        lazyLoad: 'ondemand',
        infinite: false,
        autoplay: false,
        speed: 300,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              variableWidth: true,
              dots: true,
              dotsClass: 'mobile-indicator',
              slidesToShow: 1,
              slidesToScroll: 1,
              touchThreshold: 100,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "~@/../node_modules/slick-carousel/slick/slick.css";

.services-container {
  .services-header {
    margin-bottom: 4rem;
  }
  .services-items {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 70px;
    .services-box-slick-container {
      max-width: 1600px;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .mobile-indicator {
      position: absolute;
      bottom: -40px;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
    }
    .mobile-indicator li {
      position: relative;
      display: inline-block;
      width: 6px;
      height: 6px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer;
      background: #939393;
      border: 1px solid #939393;
      border-radius: 100%;
    }
    .mobile-indicator li button {
      display: none;
    }
    .mobile-indicator li.slick-active {
      background: $current;
      border-color: $current;
    }
    .mobile-indicator li.slick-active:before {
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-radius: 100%;
      background-color: $current;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    .slick-slide {
      margin-bottom: 1rem;
    }
    .services-item {
      max-width: 300px;
      &:hover {
        box-shadow: 0px 10px 10px 0px rgba(0,0,0,.16);
      }
      .service-image {
        img {
          width: 300px;
          height: 226px;
        }
      }
      .service-description {
        background-color: $white-ice;
        height: 370px;
        padding: 1.5rem;
        .service-title {
          color: $current;
          font-size: 22px;
          font-weight: bold;
        }
        .service-body {
          color: $normal-text;
          font-size: 15px;
          padding-bottom: .5rem;
        }
        .service-link-wrapper {
          text-align: center;
          .service-link {
            color: $current;
          }
        }
      }
    }
  }
}
</style>
