<template>
  <div class="home-container">
    <div class="home-banner">
      <div class="image-wrapper">
        <img :src="require('@/assets/images/home/intro_logo_sem_fundo.gif')" alt="">
      </div>
    </div>
    <div class="page-content">
      <div class="home-projects-featured-title">
        <h1 class="title"> Projetos em destaque </h1>
      </div>
      <FeaturedProjects />
    </div>
    <Contacts />
  </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';

export default {
  name: 'Home',
  components: {
    Contacts,
    FeaturedProjects,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  .home-banner {
    width: 100%;
    background: url('~@/assets/images/home/home-banner.png');
    background-size: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    @media (min-width: map-get($grid-breakpoints, "md")) {
      height: 500px;
    }
    .image-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.5;
      vertical-align: middle;
      img {
        max-width: max-content;
        width: 100%;
        margin: auto;
        @media (min-width: map-get($grid-breakpoints, "md")) {
          height: 350px;
        }
      }
    }
  }
  .page-content {
    padding: 0 !important;
    padding-top: 3rem !important;
    @media(min-width: map-get($grid-breakpoints, "lg")) {
      max-width: 1200px;
      margin: auto;
      padding: 3rem 2rem;
    }
  }
  .home-projects-featured-title {
    margin-bottom: 2rem;
    @media(min-width: map-get($grid-breakpoints, "lg")) {
      margin-bottom: 4rem;
    }
    h1 {
      font-size: 1.75rem;
    }
  }
}
</style>
