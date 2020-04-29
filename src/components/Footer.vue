<template>
  <footer id="footer">
    <b-row>
      <b-col cols="12 text-center" sm="4">
        <router-link class="footer-logo" to="/" title="Nikolas Mourão">
          <img src="../assets/images/name.png" alt="Nikolas Mourão">
        </router-link>
      </b-col>
      <b-col cols="12" sm="4">
        <div class="footer-info">
          <a class="footer-personal">Nikolas de Sena Mourão</a>
          <a class="footer-personal">Brasilia de todos os santo, Brasil</a>
          <a class="footer-personal">(61) 98945-5555</a>
          <a class="footer-personal">nikolas@yahoo.com.br</a>
        </div>
      </b-col>
      <b-col cols="12" sm="4">
        <b-row no-gutters>
          <div class="social-group">
            <a class="facebook-img" href="https://www.facebook.com/" target="_blank"/>
            <a class="instagram-img circle" href="https://www.instagram.com/" target="_blank"/>
            <a class="linkedin-img circle" href="https://www.linkedin.com/" target="_blank"/>
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
    a {
      display: block;
      color: $normal-text;
    }
  }
  .social-group {
    display: flex;
    margin: auto;
    padding-bottom: 1.5rem;
    .facebook-img {
      width: 48px;
      height: 48px;
      background: url('../assets/icons/facebook.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
    }
    .facebook-img:hover {
      width: 48px;
      height: 48px;
      background: url('../assets/icons/facebook-hover.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
    }
    .instagram-img {
      margin-left: 1rem;
      width: 48px;
      height: 48px;
      background: url('../assets/icons/instagram.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
    }
    .instagram-img:hover {
      margin-left: 1rem;
      width: 48px;
      height: 48px;
      background: url('../assets/icons/instagram-hover.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
    }
    .linkedin-img {
      margin-left: 1rem;
      width: 48px;
      height: 48px;
      background: url('../assets/icons/linkedin.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
    }
    .linkedin-img:hover {
      margin-left: 1rem;
      width: 48px;
      height: 48px;
      background: url('../assets/icons/linkedin-hover.svg');
      background-size: 48px 48px;
      background-repeat: no-repeat;
    }
  }
  .footer-copyright-col {
    text-align: end;
    background-color: $footer-copyright;
    padding-bottom: .2rem;
  }
  .footer-copyright {
    color: $normal-text;
    padding-right: 2rem;
    font-size: .875rem;
  }
}

img {
  max-height: 100px;
  outline: none;
}
</style>
