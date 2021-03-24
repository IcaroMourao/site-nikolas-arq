<template>
  <div class="professionals-container page-content">
    <div class="projects-header">
      <h1 class="title">Nossa equipe</h1>
    </div>
    <div class="professionals-content">
      <div class="professionals-wrapper nikolas">
        <div class="professionals-image">
          <img :src="nikolas.image" alt="nikolas">
        </div>
        <div class="professionals-description">
          <div class="professionals-image-mobile">
            <img :src="nikolas.image" alt="nikolas">
          </div>
          <p class="name">{{ nikolas.name }}</p>
          <div class="infos">
            <p class="profession">{{ nikolas.profession }}</p>
            <p class="email">{{ nikolas.email }}</p>
            <p class="phone">{{ nikolas.phone }}</p>
          </div>
          <div class="arrow-div">
            <svg @click="goTo('nikolas')" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="transform:rotate(180deg);" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
          </div>
        </div>
      </div>
      <div class="professionals-wrapper icaro">
        <div class="professionals-image">
          <img :src="icaro.image" alt="icaro">
        </div>
        <div class="professionals-description">
          <div class="professionals-image-mobile">
            <img :src="icaro.image" alt="icaro">
          </div>
          <p class="name">{{ icaro.name }}</p>
          <div class="infos">
            <p class="profession">{{ icaro.profession }}</p>
            <p class="email">{{ icaro.email }}</p>
            <p class="phone">{{ icaro.phone }}</p>
          </div>
          <div class="arrow-div">
            <svg @click="goTo('icaro')" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="transform:rotate(180deg);" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfessionalItems from '@/items/ProfessionalItems';

export default {
  name: 'Professionals',
  components: {},
  data() {
    return {
      nikolas: {},
      icaro: {},
      professionals: ProfessionalItems.professionals,
    };
  },
  methods: {
    goTo(professional) {
      this.$router.push({ path: `sobre/${professional}` });
    },
  },
  created() {
    this.nikolas = this.professionals.find((professional) => professional.id === 'nikolas');
    this.icaro = this.professionals.find((professional) => professional.id === 'icaro');
  },
};
</script>

<style lang="scss" scoped>
.professionals-container {
  .projects-header {
    .title {
      margin-bottom: 2rem;
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        margin-bottom: 6rem;
      }
    }
  }
  .professionals-content {
    max-width: 450px;
    margin: auto;
    @media (min-width: map-get($grid-breakpoints, "lg")) {
      max-width: unset;
    }
    .professionals-wrapper {
      position: relative;
      width: fit-content;
      text-align: left;
      margin-bottom: 2rem;
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        margin-bottom: 6rem;
      }
      &.nikolas {
        @media (min-width: map-get($grid-breakpoints, "lg")) {
          margin-left: 4rem;
        }
      }
      &.icaro {
        @media (min-width: map-get($grid-breakpoints, "lg")) {
          margin-left: 18rem;
        }
      }
      .professionals-image {
        display: none;
        @media (min-width: map-get($grid-breakpoints, "lg")) {
          display: unset;
          max-width: 400px;
          img {
            max-width: 250px;
            max-height: 250px;
            width: auto;
            height: auto;
          }
        }
      }
      .professionals-description {
        width: fit-content;
        padding: 1rem;
        border: 3px solid black;
        @media (min-width: 375px) {
          padding: 2rem;
        }
        @media (min-width: map-get($grid-breakpoints, "lg")) {
          position: absolute;
          top: -40px;
          left: calc(100% - 25px);
          width: fit-content;
          padding: 2rem 8rem 3rem 4rem;
          border: 3px solid black;
        }
        .professionals-image-mobile {
          max-width: 100%;
          margin: auto;
          img {
            max-width: 100%;
            width: auto;
            height: auto;
            margin-bottom: 1rem;
          }
          @media (min-width: map-get($grid-breakpoints, "lg")) {
            display: none;
          }
        }
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
          margin-bottom: 2rem;
          @media (min-width: map-get($grid-breakpoints, "lg")) {
            margin-bottom: unset;
          }
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
