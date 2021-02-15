<template>
  <div class="project-picker-container">
    <div class="project-picker">
      <div class="projects-header">
        <h1 class="title"> Projetos </h1>
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
  </div>
</template>

<script>
import ProjectsItems from '@/items/ProjectsItems';

export default {
  name: 'ProjectPicker',
  data() {
    return {
      projects: ProjectsItems.projects,
    };
  },
  methods: {
    getProjectImage(project) {
      return project.img;
    },
    handlerLicense(project) {
      this.selectedProject = project;
      // eslint-disable-next-line no-param-reassign
      project.showName = false;
      const projectId = project.id;
      this.$router.push({ path: `projetos/${projectId}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.project-picker-container {
  .projects-header {
    margin-bottom: 4rem;
  }
  .projects-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .projects-item {
      position: relative;
      text-align: center;
      color: $current;
      background-color: $app-background;
      font-weight: bold;
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
}
</style>
