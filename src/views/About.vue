<template>
  <div class="about-container">
    <div class="about-content">
      <b-row>
        <b-col class="about-text" sm="12" md="6">
          <h4>Nikolas Mourão</h4>
          <p>
            Nikolas Mourão é  um Arquiteto e Urbanista formado pelo Centro Universitário Euro
            Americano - Unieuro em Brasilía - DF. Com o objetivo de realizer seu sonho através de um
            projeto. Hoje atuo no ramo de Arquitetura e Arquitetura de Interiores, carregando
            consigo novas possibilidades em termos de qualidade, funcionalidade e satifsfaçãos dos
            clientes, onde tudo pode ser realizado, se bem planejado.
          </p>
        </b-col>
        <b-col class="about-image" sm="12" md="6">
          <img src="..\assets\images\about\about-image.png" alt="About" width="100%">
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
};
</script>

<style lang="scss" scoped>
.about-container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  .about-content {
    .about-text {
      max-width: 400px;
      margin: auto;
      text-indent: 30px;
      text-align: justify;
      h4 {
        color: $light;
        text-indent: 0;
      }
      p {
        color: $light;
      }
    }
    .about-image {
      max-width: 400px;
      margin: auto;
    }
  }
}
</style>
