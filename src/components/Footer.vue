<template>
  <footer id="footer">
    <div class="info">
      <a class="footer-personal">Nikolas de Sena Mourão</a>
      <a class="footer-personal">Brasilia de todos os santo, Brasil</a>
      <a class="footer-personal">(61) 98945-5555</a>
      <a class="footer-personal">nikolas@yahoo.com.br</a>
    </div>
    <div class="social-icons">
      <div class="img-footer">
        <img src="../assets/icons/facebook-blue.svg" height="48px" width="48px" alt="">
      </div>
      <div class="img-footer">
        <img src="../assets/icons/instagram-colorful.svg" height="48px" width="48px" alt="">
      </div>
      <div class="img-footer">
        <img src="../assets/icons/linkedin-blue.svg" height="48px" width="48px" alt="">
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
#footer {
  display: inline-flex;
  justify-content: space-around;
  background: $background-footer;
  width: 100%;
  padding-top: 2em;
  padding-bottom: 2em;
  position: fixed;
  bottom:0;
  left:0;
  .info {
    overflow: hidden;
    margin: 0 2rem;
    a {
      display: block;
      color: $normal-text;
    }
  }
  .social-icons{
    .img-footer {
      display: inline-flex;
      padding-right: 3rem;
      img{
        overflow: hidden;
      }
    }
  }
}


</style>
