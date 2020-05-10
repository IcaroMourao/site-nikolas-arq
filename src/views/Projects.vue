<template>
  <div class="projects-container">
    <div class="project-picker" v-if="!selectedProject">
      <div class="projects-header">
        <h1> Projetos </h1>
      </div>
      <div class="projects-body">
        <div
          @click="handlerLicense(project)"
          class="projects-item"
          v-for="(project, index) in projects"
          :key="index">
          <img
          @mouseover="project.showName = true"
          @mouseout="project.showName = false"
          :class="{'img-hover': project.showName}"
          :src="getProjectImage(project)"
          :alt="project.name">
          <p
          @mouseover="project.showName = true"
          @mouseout="project.showName = false"
          v-show="project.showName" class="projects-item-text">
            {{ project.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="projects-project" v-else>
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
              <Slick ref="slick" :options="slickOptions">
                <a><img src="@/assets/images/projects/01.jpg" width="100%" alt=""></a>
                <a><img src="@/assets/images/projects/02.jpg" width="100%" alt=""></a>
                <a><img src="@/assets/images/projects/03.jpg" width="100%" alt=""></a>
                <a><img src="@/assets/images/projects/04.jpg" width="100%" alt=""></a>
              </Slick>
            </div>
          </b-col>
        </b-row>
      </div>
      <button @click="selectedProject=undefined"> Voltar para projetos </button>
    </div>
  </div>
</template>

<script>
import ProjectsHelper from '@/helpers/ProjectsHelper';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import Slick from 'vue-slick';

export default {
  name: 'Projects',
  components: {
    Slick,
  },
  data() {
    return {
      selectedProject: undefined,
      projects: ProjectsHelper.projects,
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/slick-carousel/slick/slick.css';

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
        height: 300px;
        margin: 1rem;
        border-radius: 10px;
        box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
        &:hover {
          cursor: pointer;
          opacity: 0.3;
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
  }
}
</style>
