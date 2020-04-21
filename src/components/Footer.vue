<template>
  <footer id="footer">
    <b-row>
      <b-col cols="12" sm="6">
        <div class="footer-info">
          <a class="footer-personal">Nikolas de Sena Mourão</a>
          <a class="footer-personal">Brasilia de todos os santo, Brasil</a>
          <a class="footer-personal">(61) 98945-5555</a>
          <a class="footer-personal">nikolas@yahoo.com.br</a>
        </div>
      </b-col>
      <b-col cols="12" sm="6">
        <b-row no-gutters>
          <div class="social-group">
            <div class="facebook-img"/>
            <div class="instagram-img"/>
            <div class="linkedin-img"/>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </footer>
</template>


<style lang="scss">
#footer {
  background: $background-footer;
  position: relative;
  width: 100%;
  padding-top: 2em;
  padding-bottom: 2em;
  margin-top: 2rem;
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
    .facebook-img {
      width: 48px;
      height: 48px;
      background: url('../assets/icons/facebook-blue.svg');
    }
    .instagram-img {
      width: 48px;
      height: 48px;
      margin-left: 1.5rem;
      background: url('../assets/icons/instagram-colorful.svg');
    }
    .linkedin-img {
      width: 48px;
      height: 48px;
      margin-left: 1.5rem;
      background: url('../assets/icons/linkedin-blue.svg');
    }
  }
}

@media(min-width: map-get($grid-breakpoints, "sm")) {
  #footer {
    .social-group {
      margin: 0;
    }
  }
}
</style>
