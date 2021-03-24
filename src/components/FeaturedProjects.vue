<template>
  <div class="projects-featured-container">
    <div class="projects-featured">
      <FeaturedProjectItem
        v-for="(project, index) in featuredProjects" :key="index"
        :project="project"
        :index="index" />
    </div>
    <div class="projects-featured-mobile overflow-hidden">
      <Slick :options="slickOptions" class="inner-projects-slider">
        <div
          class="project-box-slick-container"
          v-for="(project, index) in featuredProjects"
          :key="index">
          <FeaturedProjectItem
            :project="project"
            :index="index" />
        </div>
      </Slick>
    </div>
  </div>
</template>

<script>
import ProjectsItems from '@/items/ProjectsItems';
import FeaturedProjectItem from '@/components/FeaturedProjectItem.vue';
import Slick from 'vue-slick';

export default {
  name: 'FeaturedProjects',
  components: {
    FeaturedProjectItem,
    Slick,
  },
  data() {
    return {
      featuredProjects: [],
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
  created() {
    const projectsId = ['office-in-house', 'suite-rotang', 'santuario-natural'];
    const projectsFiltered = ProjectsItems.projects
      .filter((project) => projectsId.includes(project.id));
    this.featuredProjects = projectsFiltered.map((project) => ({
      id: project.id,
      name: project.name,
      img: project.img,
      description: project.shortDescription,
    }));
  },
};
</script>

<style lang="scss">
@import "~@/../node_modules/slick-carousel/slick/slick.css";

.projects-featured-container {
  .projects-featured {
    display: none;
    @media (min-width: map-get($grid-breakpoints, "lg")) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
  .projects-featured-mobile {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 70px;
    @media (min-width: map-get($grid-breakpoints, "lg")) {
      display: none;
    }
    .project-box-slick-container {
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
  }
}
</style>
