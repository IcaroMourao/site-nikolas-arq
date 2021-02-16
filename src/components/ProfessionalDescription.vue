<template>
  <div class="professional-description-container app-container">
    <b-row>
      <b-col class="image-col" md="4" >
        <div class="">
          <img :src="selectedProfessional.image" alt="professional">
        </div>
      </b-col>
      <b-col class="description-col" md="8">
        <div class="infos">
          <p class="name">{{ selectedProfessional.name }}</p>
          <p class="profession">{{ selectedProfessional.profession }}</p>
          <p class="description">{{ selectedProfessional.description }}</p>
          <div class="about-social-group">
            <a class="facebook-img" :href="selectedProfessional.facebook" target="_blank"/>
            <a v-if="selectedProfessional.id === 'nikolas'"
              class="pinterest-img"
              :href="selectedProfessional.pinterest"
              target="_blank"/>
            <a v-if="selectedProfessional.id === 'icaro'"
              class="github-img"
              :href="selectedProfessional.github"
              target="_blank"/>
            <a class="linkedin-img" :href="selectedProfessional.linkedin" target="_blank"/>
            <a class="instagram-img" :href="selectedProfessional.instagram" target="_blank"/>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <div @click="goBack" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
          <div class="back-name">
            Voltar
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProfessionalItems from '@/items/ProfessionalItems';

export default {
  name: 'ProfessionalDescription',
  props: ['professional'],
  data() {
    return {
      selectedProfessional: {},
      professionals: ProfessionalItems.professionals,
    };
  },
  created() {
    this.selectedProfessional = this.professionals
      .find((professional) => professional.id === this.professional);
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/sobre' });
    },
  },
};
</script>

<style lang="scss" scoped>
.professional-description-container {
  .image-col {
    display: flex;
    flex-direction: column;
    img {
      width: 350px;
      height: 380px;
      padding-bottom: 1rem;
      align-items: center;
    }
  }
  .description-col {
    .infos {
      display: flex;
      height: 100%;
      flex-direction: column;
      padding: 0 2rem;
      justify-content: space-between;
      .name {
        width: fit-content;
        font-size: 24px;
        font-weight: bold;
        border-bottom: 1px solid $current;
      }
      .profession {
        font-weight: bold;
        flex: 1;
      }
      .description {
        font-size: 14px;
        font-weight: normal;
        color: $normal-text;
        flex: 2;
      }
      .about-social-group {
        display: flex;
        padding-bottom: 1rem;
        .facebook-img {
          width: 26px;
          height: 26px;
          background: url('~@/assets/icons/professional/facebook.svg');
          background-size: 26px 26px;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .instagram-img {
          margin-left: 2rem;
          width: 26px;
          height: 26px;
          background: url('~@/assets/icons/professional/instagram.svg');
          background-size: 26px 26px;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .pinterest-img {
          margin-left: 2rem;
          width: 26px;
          height: 26px;
          background: url('~@/assets/icons/professional/pinterest.svg');
          background-size: 26px 26px;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .tumblr-img {
          margin-left: 2rem;
          width: 26px;
          height: 26px;
          background: url('~@/assets/icons/professional/tumblr.svg');
          background-size: 26px 26px;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .linkedin-img {
          margin-left: 2rem;
          width: 26px;
          height: 26px;
          background: url('~@/assets/icons/professional/linkedin.svg');
          background-size: 26px 26px;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .github-img {
          margin-left: 2rem;
          width: 26px;
          height: 26px;
          background: url('~@/assets/icons/professional/github.svg');
          background-size: 26px 26px;
          background-repeat: no-repeat;
          cursor: pointer;
        }
      }
    }
  }
  .back-button {
    cursor: pointer;
    display: flex;
    width: fit-content;
    svg {
      margin-top: .35rem;
    }
    .back-name {
      font-weight: bold;
      padding-left: .75rem;
    }
  }
}
</style>
