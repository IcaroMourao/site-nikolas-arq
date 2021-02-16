<template>
  <footer id="footer">
    <b-row>
      <b-col cols="12 text-center" md="4">
        <router-link class="footer-logo" to="/" title="Nikolas Mourão">
          <img src="../assets/images/name.png" alt="Nikolas Mourão">
        </router-link>
      </b-col>
      <b-col cols="12" md="4">
        <div class="footer-info">
          <p class="footer-personal">Nikolas Mourão</p>
          <p class="footer-personal">Brasilia/DF</p>
          <p class="footer-personal">(61) 99439-6832</p>
          <a href="mailto:nikolasmouraoarquiteto@gmail.com">
              nikolasmouraoarquiteto@gmail.com
          </a>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <b-row no-gutters>
          <div class="social-group">
            <a class="facebook-img" href="https://www.facebook.com/nikolasm.arq" target="_blank"/>
            <a class="instagram-img" href="https://www.instagram.com/nikolasm.arq" target="_blank"/>
            <a class="linkedin-img" href="https://www.linkedin.com/in/nikolas-mourão-502018143/" target="_blank"/>
            <a class="pinterest-img" href="https://br.pinterest.com/nikolasmouraoarquiteto/_saved/" target="_blank"/>
          </div>
        </b-row>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col class="footer-copyright-col">
        <a class="footer-copyright">
          Copyright © 2020 Nikolas Mourão. Todos direitos reservados.
        </a>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
#footer {
  background-color: $background-header-footer;
  width: 100%;
  padding-top: 2em;
  > div {
    margin: 0;
  }
  .footer-logo {
    text-align: center;
    img {
      max-width: 100%;
    }
  }
  .footer-info {
    display: grid;
    justify-content: center;
    padding-bottom: 1.5rem;
    color: $light;
    p {
      margin: 0;
      display: block;
    }
    a {
      display: block;
      color: $light;
    }
  }
  .social-group {
    display: flex;
    margin: auto;
    padding-bottom: 1.5rem;
    .facebook-img {
      width: 48px;
      height: 48px;
      background: url('~@/assets/icons/footer/facebook.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
      &:hover {
        width: 48px;
        height: 48px;
        background: url('~@/assets/icons/footer/facebook-hover.svg');
        background-size: 48px 48px;
        background-repeat: no-repeat;
      }
    }
    .instagram-img {
      margin-left: 1rem;
      width: 48px;
      height: 48px;
      background: url('~@/assets/icons/footer/instagram.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
      &:hover {
        margin-left: 1rem;
        width: 48px;
        height: 48px;
        background: url('~@/assets/icons/footer/instagram-hover.svg');
        background-size: 48px 48px;
        background-repeat: no-repeat;
      }
    }
    .linkedin-img {
      margin-left: 1rem;
      width: 48px;
      height: 48px;
      background: url('~@/assets/icons/footer/linkedin.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
      &:hover {
        margin-left: 1rem;
        width: 48px;
        height: 48px;
        background: url('~@/assets/icons/footer/linkedin-hover.svg');
        background-size: 48px 48px;
        background-repeat: no-repeat;
      }
    }
    .pinterest-img {
      margin-left: 1rem;
      width: 48px;
      height: 48px;
      background: url('~@/assets/icons/footer/pinterest.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
      &:hover {
        margin-left: 1rem;
        width: 48px;
        height: 48px;
        background: url('~@/assets/icons/footer/pinterest-hover.svg');
        background-size: 48px 48px;
        background-repeat: no-repeat;
      }
    }
  }
  .footer-copyright-col {
    text-align: end;
    background-color: $footer-copyright;
    padding-bottom: .2rem;
  }
  .footer-copyright {
    color: $light;
    padding-right: 2rem;
    font-size: .875rem;
    &:hover {
      cursor: default;
      text-decoration: none;
    }
  }
}

img {
  max-height: 100px;
  outline: none;
}
</style>
