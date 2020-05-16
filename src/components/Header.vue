<template>
  <div class="header-container">
    <b-navbar type="dark" variant="dark" class="header-navbar" toggleable="lg">
      <b-navbar-brand href="#" class="header-brand">
        <router-link to="/" title="Nikolas Mourão">
          <img src="../assets/images/name.png" alt="Nikolas Mourão">
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="nav-toggle-button"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto">
          <b-nav-item class="header-nav-item" v-for="(item, index) in menu" :key="index">
            <router-link
              active-class="current"
              :exact="true"
              class="header-nav-link nav-link"
              :to="item.route"> {{ item.name }} </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: [
        {
          name: 'Inicio',
          route: '/',
        },
        {
          name: 'Sobre',
          route: '/sobre',
        },
        {
          name: 'Projetos',
          route: '/projetos',
        },
        {
          name: 'Outros serviços',
          route: '/outros-servicos',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 60px;
  @media (min-width: map-get($grid-breakpoints, "xl")) {
    height: 80px;
  }
  .header-navbar {
    padding: 0 2rem;
    .nav-toggle-button {
      border: none;
      outline: none;
      &[aria-expanded="true"] {
        background-color: $header-dropdown-background;
      }
      &::v-deep > .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }
    }
    .header-brand {
      padding: 0;
      img {
        max-height: 60px;
        outline: none;
        @media (min-width: map-get($grid-breakpoints, "xl")) {
          max-height: 80px;
        }
      }
    }
    .header-nav-item {
      text-align: center;
      text-transform: uppercase;
      .header-nav-link {
        color: $normal-text;
        @media (min-width: map-get($grid-breakpoints, "lg")) {
          border-bottom: 3px solid transparent;
          height: 100%;
          align-items: center;
          white-space: nowrap;
          text-decoration: none;
          transition: all 200ms ease;
          &.current,
          &:hover {
            color: $normal-text;
            border-color: $comment;
          }
        }
      }
    }
  }
}
</style>
