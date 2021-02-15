<template>
  <div class="home-container">
    <div class="home-banner">
      <div class="video-wrapper">
        <video autoplay muted loop>
          <source :src="require('@/assets/videos/home-banner-logo.mp4')" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="app-container">
      <div class="home-projects-featured-title">
        <h1 class="title"> Projetos em destaque </h1>
      </div>
      <div class="projects-featured">
        <div class="project-wrapper project-one">
          <div class="project-infos one-infos">
            <h3>Suíte Rotang</h3>
            <p>
              A seleção do mobiliário e a presença da madeira clara e rattan em todo o ambiente,
              com acabamento de filetes metalizados e no piso, além das lâminas de madeira, as
              paredes também foram revestidas com ripas de madeiras claras.
            </p>
            <div @click="goTo(3)" class="see-more">
              Ver mais...
            </div>
          </div>
          <div class="project-image image-one">
            <img
              :src="require('@/assets/images/projects/project3/01.jpg')"
              alt="01">
          </div>
        </div>
        <div class="project-wrapper project-two ">
          <div class="project-infos two-infos">
            <h3>Santuário Natural</h3>
            <p>
              Um verdadeiro santuário de relaxamento, com materiais naturais como pedra e madeira
              proporcionam um equilíbrio minimalista e aconchegante.
            </p>
            <div @click="goTo(4)" class="see-more">
              Ver mais...
            </div>
          </div>
          <div class="project-image image-two">
            <img
              :src="require('@/assets/images/projects/project4/04.jpg')"
              alt="01">
          </div>
        </div>
        <div class="project-wrapper project-three">
          <div class="project-infos three-infos">
            <h3>Office in house</h3>
            <p>
              Ambientes funcionais e integrados são a nova tendência em casas e principalmente
              apartamentos. Assim como os home offices que estão cada vez mais comuns devido a
              tecnologia e a diversos trabalhos que dependem dela.
            </p>
            <div @click="goTo(2)" class="see-more">
              Ver mais...
            </div>
          </div>
          <div class="project-image image-three">
            <img
              :src="require('@/assets/images/projects/project2/06.jpg')"
              alt="01">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    goTo(projectId) {
      this.$router.push(`projetos/${projectId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  .home-banner {
    width: 100%;
    height: 500px;
    background: url('~@/assets/images/home/home-banner.png');
    background-size: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    .video-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.5;
      vertical-align: middle;
      video {
        width: 100%;
        height: 350px;
      }
    }
  }
  .home-projects-featured-title {
    margin-bottom: 4rem;
    h1 {
      font-size: 1.75rem;
    }
  }
  .projects-featured {
    display: flex;
    flex-wrap: wrap;
    .project-wrapper {
      margin-right: 2rem;
      margin-bottom: 2rem;
      &.project-one {
        position: relative;
        .one-infos {
          position: absolute;
          top: 0;
          left: calc(50% - 200px);
        }
        .image-one {
          margin-top: 12rem;
        }
      }
      &.project-two {
        position: relative;
        .two-infos {
          position: absolute;
          bottom: 0;
          left: calc(50% - 200px);
        }
      }
      &.project-three {
        position: relative;
        .three-infos {
          position: absolute;
          top: 0;
          left: calc(50% - 200px);
        }
        .image-three {
          margin-top: 12rem;
        }
      }
      .project-infos {
        background-color: $light;
        max-width: 400px;
        padding: 2rem;
        box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
        z-index: 100;
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
        img {
          max-width: 486px;
          max-height: 580px;
          width: auto;
          height: auto;
        }
      }
    }
  }
}
</style>
