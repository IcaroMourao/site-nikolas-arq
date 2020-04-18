<template>
  <div class="header-container">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="nav-bar">
      <h1 class="app-title">Nikolas Mourão</h1>
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
    h1 {
      width: 100%;
      color: $normal-text;
      margin-left: 6rem;
      margin-right: 2rem;
      padding-top: .525rem;
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
</style>
