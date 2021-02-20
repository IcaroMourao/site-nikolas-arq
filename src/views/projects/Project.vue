<template>
  <div class="project-container page-content">
    <div class="project-content" v-if="projects">
      <div class="project-header">
        <h1 class="title"> {{ selectedProject.name }} </h1>
      </div>
      <div class="project-body">
        <b-row>
          <b-col lg="6">
            <div class="project-description" v-html="selectedProject.description"/>
          </b-col>
          <b-col lg="6">
            <div class="slider">
              <b-row class="infos">
                <b-col class="info" cols="6" sm="4">
                  <div class="info-icon-area"> </div>
                  <div class="info-description">{{ `Área: ${selectedProject.area}m²` }}</div>
                </b-col>
                <b-col class="info" cols="6" sm="4">
                  <div class="info-icon-year"> </div>
                  <div class="info-description">{{ `Ano: ${selectedProject.year}` }}</div>
                </b-col>
                <b-col class="info" cols="12" sm="4">
                  <div class="info-icon-local"> </div>
                  <div class="info-description">{{ `Local: ${selectedProject.local}` }}</div>
                </b-col>
              </b-row>
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
import ProjectsItems from '@/items/ProjectsItems';

export default {
  name: 'Project',
  components: {
    Slider,
  },
  props: ['id'],
  data() {
    return {
      projects: ProjectsItems.projects,
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
    }
    .project-body {
      .project-description {
        max-width: 420px;
        color: $normal-text;
        text-align: justify;
        margin: auto;
        margin-bottom: 2rem;
      }
      .slider {
        max-width: 600px;
        margin: auto;
        .infos {
          display: flex;
          .info {
            display: flex;
            padding-bottom: .5rem;
            padding-right: 1rem;
            .info-icon-area {
              width: 25px;
              height: 25px;
              background: url('~@/assets/icons/area.svg');
              background-size: 25px 25px;
              background-repeat: no-repeat;
            }
            .info-icon-year {
              width: 25px;
              height: 25px;
              background: url('~@/assets/icons/year.svg');
              background-size: 25px 25px;
              background-repeat: no-repeat;
            }
            .info-icon-local {
              width: 25px;
              height: 25px;
              background: url('~@/assets/icons/localization.svg');
              background-size: 25px 25px;
              background-repeat: no-repeat;
            }
            .info-description {
              color: $normal-text;
              padding-left: .4rem;
            }
          }
        }
      }
    }
    .button-wrap {
      max-width: 575px;
      text-align: center;
    }
  }
}
</style>
