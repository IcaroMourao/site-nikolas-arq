<template>
<div class="services-container page-content">
  <div class="services-header">
    <h1 class="title">Outros Serviços</h1>
  </div>
  <div class="services-items">
    <div
      class="services-item"
      :class="{ 'mr-4': index !== 2 }"
      v-for="(service, index) in services"
      :key="index">
      <div class="service-image">
        <img :src="service.image" alt="service">
      </div>
      <div class="service-description">
        <p class="service-title">{{ service.title }}</p>
        <p class="service-body">{{ service.description }}</p>
        <div class="service-link-wrapper">
          <router-link
            class="service-link"
            to="/outros-servicos/contato">
              Contate-nos >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServiceItems from '@/items/ServiceItems';

export default {
  name: 'Services',
  data() {
    return {
      services: ServiceItems.services,
    };
  },
};
</script>

<style lang="scss" scoped>
.services-container {
  .services-header {
    margin-bottom: 4rem;
  }
  .services-items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .services-item {
      max-width: 300px;
      &:hover {
        box-shadow: 0px 10px 10px 0px rgba(0,0,0,.16);
      }
      .service-image {
        img {
          width: 300px;
          height: 226px;
        }
      }
      .service-description {
        background-color: $white-ice;
        height: 370px;
        padding: 1.5rem;
        .service-title {
          color: $current;
          font-size: 22px;
          font-weight: bold;
        }
        .service-body {
          color: $normal-text;
          font-size: 15px;
          padding-bottom: .5rem;
        }
        .service-link-wrapper {
          text-align: center;
          .service-link {
            color: $current;
          }
        }
      }
    }
  }
}
</style>
