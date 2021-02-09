<template>
  <div class="about-container app-container">
    <div class="projects-header">
      <h1 class="title">Nossa equipe</h1>
    </div>
    <div class="about-content">
      <div class="about-wrapper nikolas">
        <div class="about-image">
          <img src="..\assets\images\about\nikolas.jpeg" alt="About" width="100%">
        </div>
        <div class="about-description">
          <p class="name">Nikolas Mourão</p>
          <div class="infos">
            <p class="profession">Arquiteto Fundador</p>
            <p class="email">nikolasmouraoarquiteto@gmail.com</p>
            <p class="phone">(61) 99439-6832</p>
          </div>
          <div class="arrow-div">
            <svg @click="goTo()" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="transform:rotate(180deg);" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
          </div>
        </div>
      </div>
      <div class="about-wrapper icaro">
        <div class="about-image">
          <img src="..\assets\images\about\icaro.jpeg" alt="About">
        </div>
        <div class="about-description">
          <p class="name">Icaro Mourão</p>
          <div class="infos">
            <p class="profession">Web Design</p>
            <p class="email">icaro.mourao1@hotmail.com</p>
            <p class="phone">(88) 99498-7473</p>
          </div>
          <div class="arrow-div">
            <svg @click="goTo()" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="transform:rotate(180deg);" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  methods: {
    goTo() {
      console.log('ir');
    },
  },
};
</script>

<style lang="scss" scoped>
.about-container {
  .projects-header {
    .title {
      margin-bottom: 6rem;
    }
  }
  .about-content {
    margin: auto;
    .about-wrapper {
      position: relative;
      width: fit-content;
      text-align: left;
      margin-bottom: 6rem;
      &.nikolas {
        margin-left: 4rem;
      }
      &.icaro {
        margin-left: 18rem;
      }
      .about-image {
        max-width: 400px;
        img {
          max-width: 250px;
          max-height: 250px;
          width: auto;
          height: auto;
        }
      }
      .about-description {
        position: absolute;
        top: -40px;
        left: calc(100% - 25px);
        width: fit-content;
        padding: 2rem 8rem 3rem 4rem;
        border: 3px solid black;
        .name {
          width: fit-content;
          font-size: 19px;
          font-weight: 300;
          padding-bottom: .5rem;
          border-bottom: 1px solid $current;
        }
        .infos {
          line-height: .25;
          font-size: 14px;
          .profession {
            font-weight: bold;
          }
        }
        .arrow-div {
          position: absolute;
          bottom: 15px;
          right: 25px;
          .arrow {
            cursor: pointer;
            height: 18px;
            width: 18px;
          }
        }
      }
    }
  }
}
</style>
