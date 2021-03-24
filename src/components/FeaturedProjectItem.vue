<template>
  <div
    class="project-wrapper"
    :class="[`project-${index + 1}`]">
    <div class="project-infos" :class="[`infos-${index + 1}`]">
      <div class="project-image-mobile" :class="[`image-${index + 1}`]">
        <img :src="project.img" alt="project">
      </div>
      <h3>{{ project.name }}</h3>
      <p class="project-description" v-html="project.description"></p>
      <div @click="goTo(project.id)" class="see-more">Ver mais...</div>
    </div>
    <div class="project-image" :class="[`image-${index + 1}`]">
      <img :src="project.img" alt="project">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedProjectItem',
  props: {
    project: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goTo(projectId) {
      this.$router.push(`projetos/${projectId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.project-wrapper {
  position: relative;
  margin-bottom: 1rem;
  @media (min-width: map-get($grid-breakpoints, "lg")) {
    margin-right: 2rem;
    margin-bottom: 3rem;
  }
  &.project-1 {
    .infos-1 {
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        position: absolute;
        top: 0;
        left: calc(50% - 200px);
      }
    }
    .image-1 {
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        margin-top: 12rem;
      }
    }
  }
  &.project-2 {
    .infos-2 {
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        position: absolute;
        bottom: 0;
        left: calc(50% - 200px);
      }
    }
  }
  &.project-3 {
    .infos-3 {
      .project-description {
        margin-bottom: 5.5rem;
        @media (min-width: map-get($grid-breakpoints, "sm")) {
          margin-bottom: 4rem;
        }
      }
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        position: absolute;
        top: 0;
        left: calc(50% - 200px);
      }
    }
    .image-3 {
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        margin-top: 12rem;
      }
    }
  }
  .project-infos {
    background-color: $light;
    max-width: 300px;
    height: 550px;
    padding: 2rem;
    box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
    z-index: -100;
    @media (min-width: map-get($grid-breakpoints, "sm")) {
      max-width: 400px;
    }
    @media (min-width: map-get($grid-breakpoints, "lg")) {
      z-index: 100;
      height: unset;
    }
    h3 {
      font-size: 1rem;
    }
    .see-more {
      cursor: pointer;
      text-align: right;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .project-image {
    display: none;
    @media (min-width: map-get($grid-breakpoints, "lg")) {
      display: block;
    }
    img {
      max-width: 486px;
      max-height: 580px;
      width: auto;
      height: auto;
    }
  }
  .project-image-mobile {
    margin-bottom: 1.5rem;
    img {
      max-width: 100%;
    }
    @media (min-width: map-get($grid-breakpoints, "lg")) {
      display: none;
    }
  }
}
</style>
