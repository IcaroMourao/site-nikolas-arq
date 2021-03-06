<template>
  <div class="project-container page-content">
    <div class="project-content" v-if="projects">
      <div class="project-header">
        <h1 class="title"> {{ selectedProject.name }} </h1>
      </div>
      <div class="project-body">
        <b-row>
          <b-col class="description-col" sm="12" lg="6">
            <div class="project-description" v-html="selectedProject.description"/>
          </b-col>
          <b-col sm="12" lg="6">
            <div class="infos">
              <div class="info">
                <div class="info-icon-area"> </div>
                <div class="info-description">{{ `Área: ${selectedProject.area}m²` }}</div>
              </div>
              <div class="info">
                <div class="info-icon-year"> </div>
                <div class="info-description">{{ `Ano: ${selectedProject.year}` }}</div>
              </div>
              <div class="info">
                <div class="info-icon-local"> </div>
                <div class="info-description">{{ `Local: ${selectedProject.local}` }}</div>
              </div>
            </div>
            <div class="slider">
              <Slider
                v-on:open-slide-show="openSlideShow"
                :items="selectedProject.sliderImgs"
                :slickOptions="slickOptions"/>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <VueGallerySlideshow
      :images="mapedImages"
      :index="slideShowIndex"
      @close="slideShowIndex = null"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Slider from '@/components/Slider.vue';
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: 'Project',
  components: {
    Slider,
    VueGallerySlideshow,
  },
  props: ['id'],
  data() {
    return {
      projects: [],
      selectedProject: undefined,
      sliderImgs: [],
      mapedImages: [],
      slickOptions: {
        arrows: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        fade: false,
        pauseOnFocus: false,
        pauseOnHover: false,
      },
      slideShowIndex: null,
    };
  },
  computed: {
    ...mapGetters({
      getProjects: 'project/getProjects',
    }),
  },
  created() {
    this.projects = this.getProjects;
    this.selectedProject = this.projects.find((project) => project.id === this.id);
    this.mapImagesToSlideShow();
  },
  methods: {
    backToProjects() {
      this.$router.push({ path: '/projetos' });
    },
    openSlideShow(index) {
      this.slideShowIndex = index;
    },
    mapImagesToSlideShow() {
      this.mapedImages = this.selectedProject.sliderImgs.map((item) => ({
        url: item.img,
        alt: item.name,
      }));
    },
  },
};
</script>

<style lang='scss'>
.vgs {
  .vgs__container {
    margin-top: 1rem;
    max-width: 100%;
    height: 95vh;
  }
  .vgs__close {
    margin-top: 1rem;
    margin-right: .5rem;
  }
}
</style>

<style lang='scss' scoped>
.project-container{
  .project-content {
    .project-header {
      text-align: center;
      margin-bottom: 1rem;
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        margin-bottom: 4rem;
      }
    }
    .project-body {
      .infos {
        display: flex;
        justify-content: space-between;
        max-width: 600px;
        margin: auto;
        .info {
          display: flex;
          flex-wrap: wrap;
          padding-bottom: .5rem;
          padding-right: 1rem;
          .info-icon-area {
            width: 20px;
            height: 20px;
            background: url('~@/assets/icons/area.svg');
            background-size: 20px 20px;
            background-repeat: no-repeat;
            @media (min-width: map-get($grid-breakpoints, "lg")) {
              width: 25px;
              height: 25px;
              background-size: 25px 25px;
            }
          }
          .info-icon-year {
            width: 20px;
            height: 20px;
            background: url('~@/assets/icons/year.svg');
            background-size: 20px 20px;
            background-repeat: no-repeat;
            @media (min-width: map-get($grid-breakpoints, "lg")) {
              width: 25px;
              height: 25px;
              background-size: 25px 25px;
            }
          }
          .info-icon-local {
            width: 20px;
            height: 20px;
            background: url('~@/assets/icons/localization.svg');
            background-size: 20px 20px;
            background-repeat: no-repeat;
            @media (min-width: map-get($grid-breakpoints, "lg")) {
              width: 25px;
              height: 25px;
              background-size: 25px 25px;
            }
          }
          .info-description {
            color: $normal-text;
            padding-left: .4rem;
          }
        }
      }
      .description-col {
        .project-description {
          max-width: 600px;
          color: $normal-text;
          text-align: justify;
          margin: 0 auto;
          margin-bottom: 2rem;
          padding-top: 25px;
          @media (min-width: map-get($grid-breakpoints, "lg")) {
            max-width: 420px;
          }
        }
      }
      .slider {
        max-width: 600px;
        margin: auto;
      }
    }
  }
}
</style>
