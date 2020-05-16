<template>
  <div class="project-container">
    <div class="project-content" v-if="projects">
      <div class="project-header">
        <h1> {{ selectedProject.name }} </h1>
      </div>
      <div class="project-body">
        <b-row>
          <b-col lg="6">
            <div class="project-description" v-html="selectedProject.description"/>
          </b-col>
          <b-col lg="6">
            <div class="slider-container">
              <Slider :items="selectedProject.sliderImgs" :slickOptions="slickOptions"/>
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
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';
import ProjectsHelper from '@/helpers/ProjectsHelper';

export default {
  name: 'Project',
  components: {
    Slider,
  },
  props: ['id'],
  data() {
    return {
      projects: ProjectsHelper.projects,
      selectedProject: undefined,
      sliderImgs: {},
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
  created() {
    this.selectedProject = this.projects[this.id - 1];
  },
  methods: {
    backToProjects() {
      this.$router.push({ path: '/projetos' });
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

<style lang='scss' scoped>
.project-container{
  .project-content {
    .project-header {
      text-align: center;
      margin-bottom: 4rem;
      h1 {
        color: $light;
      }
    }
    .project-body {
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
</style>
