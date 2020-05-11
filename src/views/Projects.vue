<template>
  <div class="projects-container">
    <transition name="fade" mode="out-in">
      <div key="1" class="project-picker" v-if="!selectedProject">
        <div class="projects-header">
          <h1> Projetos </h1>
        </div>
        <div class="projects-body">
          <div
            class="projects-item"
            v-for="(project, index) in projects"
            :key="index">
            <img
            @click="handlerLicense(project)"
            @mouseover="project.showName = true"
            @mouseout="project.showName = false"
            :class="{'img-hover': project.showName}"
            :src="getProjectImage(project)"
            :alt="project.name">
            <p
            @click="handlerLicense(project)"
            @mouseover="project.showName = true"
            @mouseout="project.showName = false"
            v-show="project.showName" class="projects-item-text">
              {{ project.name }}
            </p>
          </div>
        </div>
      </div>
      <div key="2" class="projects-project" v-else>
        <div class="projects-header">
          <h1> {{ selectedProject.name }} </h1>
        </div>
        <div class="projects-selected-project-body">
          <b-row>
            <b-col lg="6">
              <div class="project-description" v-html="selectedProject.description"/>
            </b-col>
            <b-col lg="6">
              <div class="slider-container">
                <Slider :items="sliderImgs" :slickOptions="slickOptions"/>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="button-wrap">
          <b-button
            class="mt-4"
            variant="primary"
            @click="backToProjects">
            Voltar para projetos
          </b-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ProjectsHelper from '@/helpers/ProjectsHelper';
import Slider from '@/components/Slider.vue';

export default {
  name: 'Projects',
  components: {
    Slider,
  },
  data() {
    return {
      selectedProject: undefined,
      projects: ProjectsHelper.projects,
      sliderImgs: ProjectsHelper.sliderImgs,
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
    };
  },
  methods: {
    showText() {

    },
    getProjectImage(project) {
      return project.img;
    },
    handlerLicense(project) {
      this.selectedProject = project;
      // eslint-disable-next-line no-param-reassign
      project.showName = false;
      this.scrollToTop();
    },
    backToProjects() {
      this.selectedProject = undefined;
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>

.projects-container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  .projects-header {
    text-align: center;
    margin-bottom: 4rem;
    h1 {
      color: $light;
    }
  }
  .projects-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .projects-item {
      position: relative;
      text-align: center;
      color: $light;
      img {
        max-width: 280px;
        margin: 1rem;
        border-radius: 10px;
        box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
        &:hover {
          cursor: pointer;
          opacity: 0.3;
        }
        @media (min-width: map-get($grid-breakpoints, "lg")){
          max-width: 420px;
        }
      }
      .img-hover {
        opacity: 0.3;
      }
      .projects-item-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .projects-project {
    .projects-selected-project-body {
      .project-description {
        max-width: 420px;
        color: $light;
        text-align: justify;
        margin: auto;
        margin-bottom: 2rem;
      }
      .slider-container {
        max-width: 600px;
        margin: auto;
      }
    }
    .button-wrap {
      max-width: 575px;
      text-align: center;
    }
  }
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
