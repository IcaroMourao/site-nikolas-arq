<template>
  <div class="header-container">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="nav-bar">
        <a class="navbar-brand app-name" href="/">
          <img src="../assets/images/name.png" width="227px" height="90px" alt="">
        </a>
        <ul class="nav-list">
          <li class="nav-item">
            <router-link
              active-class="current"
              :exact="true"
              class="nav-link"
              to="/"> Início </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="current"
              :exact="true"
              class="nav-link"
              to="/about"> Sobre </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="current"
              :exact="true"
              class="nav-link"
              to="/projects"> Projetos </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="current"
              :exact="true"
              class="nav-link"
              to="/contact"> Contato </router-link>
          </li>
        </ul>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.header-container {
  .nav-bar {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    .app-name {
      padding-top: .525rem;
      font-size: 2.5rem;
      .brand-img {
        img {
          height: 100%;
          width: auto;
          padding: 1rem;
        }
      }
    }
    .nav-list {
      width: 100%;
      padding: .532rem 0 36px;
      margin: 0;
      list-style: none;
      display: inline-flex;
      &::after {
        content: '';
        min-width: 15px;
        height: 15px;
        position: relative;
      }
      .nav-item {
        margin: 0 .5rem;
        height: 100%;
        display: inline-block;
        .nav-link {
          border-bottom: 3px solid transparent;
          height: 100%;
          display: flex;
          align-items: center;
          color: $normal-text;
          white-space: nowrap;
          text-decoration: none;
          transition: all 200ms ease;
            &.current,
            &:hover {
              color: $normal-text;
              border-color: $comment;
              font-size: 1.2rem;
            }
        }
      }
    }
  }
}

@media(min-width: map-get($grid-breakpoints, "md")) {
  .header-container {
    .nav-bar {
      .app-name {
        margin: 0 6rem;
      }
    }
  }
}
</style>
