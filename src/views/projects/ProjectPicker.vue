<template>
  <div class="project-picker-container page-content">
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
            @click="selectProject(project)"
            class="project-image" :src="getProjectImage(project)"
            :alt="project.name">
          <p
            @click="selectProject(project)"
            class="projects-item-text">
            {{ project.name }}
          </p>
          <div
            @click="setLike(project)"
            :class="{'heart-icon-hover': project.liked, 'heart-icon': !project.liked}" />
          <div @click="openShareModal(project)" class="share-icon" />
        </div>
      </div>
    </div>
    <ShareModal :project="shareProject"/>
  </div>
</template>

<script>
import ProjectsItems from '@/items/ProjectsItems';
import ShareModal from '@/components/ShareModal.vue';

export default {
  name: 'ProjectPicker',
  components: {
    ShareModal,
  },
  data() {
    return {
      projects: ProjectsItems.projects,
      shareProject: {},
    };
  },
  methods: {
    getProjectImage(project) {
      return project.img;
    },
    selectProject(project) {
      this.selectedProject = project;
      // eslint-disable-next-line no-param-reassign
      project.showName = false;
      const projectId = project.id;
      this.$router.push({ path: `projetos/${projectId}` });
    },
    setLike(likedProject) {
      this.projects.forEach((project, index) => {
        if (project.id === likedProject.id) {
          this.projects[index].liked = true;
        }
      });
    },
    openShareModal(project) {
      this.shareProject = project;
      this.$bvModal.show('share-modal');
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
        & > .heart-icon-hover {
          display: block;
          position: absolute;
          bottom: 35px;
          left: 35px;
          width: 24px;
          height: 24px;
          background: url('~@/assets/icons/heart-hover.svg');
          background-size: 24px 24px;
          background-repeat: no-repeat;
        }
      }
      .project-image {
        max-width: 420px;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
      }
      .projects-item-text {
        display: none;
      }
      .heart-icon {
        display: none;
      }
      .heart-icon-hover {
        display: none;
      }
      .share-icon {
        display: none;
      }
    }
  }
}
</style>
