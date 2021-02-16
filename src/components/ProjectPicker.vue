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
            class="project-image" :src="getProjectImage(project)"
            :alt="project.name">
          <p @click="handlerLicense(project)" class="projects-item-text">
            {{ project.name }}
          </p>
          <div class="heart-icon" />
          <div class="share-icon" />
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
      margin: 1rem;
      &:hover {
        cursor: pointer;
        & > .project-image {
          opacity: 0.3;
        }
        & > .projects-item-text {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2rem;
          cursor: pointer;
          user-select: none;
        }
        & > .heart-icon {
          display: block;
          position: absolute;
          bottom: 35px;
          left: 35px;
          width: 24px;
          height: 24px;
          background: url('~@/assets/icons/heart.svg');
          background-size: 24px 24px;
          background-repeat: no-repeat;
          &:hover {
            width: 24px;
            height: 24px;
            background: url('~@/assets/icons/heart-hover.svg');
            background-size: 24px 24px;
            background-repeat: no-repeat;
          }
        }
        & > .share-icon {
          display: block;
          position: absolute;
          bottom: 35px;
          right: 35px;
          width: 24px;
          height: 24px;
          background: url('~@/assets/icons/share.svg');
          background-size: 24px 24px;
          background-repeat: no-repeat;
          &:hover {
            width: 24px;
            height: 24px;
            background: url('~@/assets/icons/share-hover.svg');
            background-size: 24px 24px;
            background-repeat: no-repeat;
          }
        }
      }
      .project-image {
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
        @media (min-width: map-get($grid-breakpoints, "lg")){
          max-width: 420px;
        }
      }
      .projects-item-text {
        display: none;
      }
      .heart-icon {
        display: none;
      }
      .heart-icon {
        display: none;
      }
      .share-icon {
        display: none;
      }
    }
  }
}
</style>
