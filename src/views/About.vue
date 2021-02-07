<template>
  <div class="about-container app-container">
    <div class="projects-header">
      <h1 class="title">Nossa equipe</h1>
    </div>
    <div class="about-content">
      <b-row class="nikolas-row">
        <b-col class="about-image" sm="12" md="6">
          <img src="..\assets\images\about\nikolas.png" alt="About" width="100%">
        </b-col>
        <b-col class="about-text" sm="12" md="6">
          <h4 class="about-title">Nikolas Mourão - Arquiteto Fundador</h4>
          <p>
            Nikolas Mourão é um Arquiteto e Urbanista formado pelo Centro Universitário Euro
            Americano - Unieuro em Brasilía - DF. Com o objetivo de realizer seu sonho através de
            projetos. Hoje atua no ramo de Arquitetura e Arquitetura de Interiores, carregando
            consigo novas possibilidades em termos de qualidade, funcionalidade e satifsfaçãos dos
            clientes, onde tudo pode ser realizado, se bem planejado.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="about-text" sm="12" md="6">
          <h4 class="about-title">Ícaro Mourão - Web Design</h4>
          <p>
            Ícaro Mourão é um Ciêntista da Computação formado pela Univesidade Federal do Ceará.
            Objetiva a automação de todos os processos que não necessitam de intervenção humana,
            tornando todos os processos mais ágeis e com um menor custo.
          </p>
        </b-col>
        <b-col class="about-image" sm="12" md="6">
          <img src="..\assets\images\about\icaro.jpeg" alt="About" width="100%">
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
  .about-content {
    .nikolas-row {
      margin-bottom: 4rem;
    }
    .about-text {
      max-width: 400px;
      margin: auto;
      text-indent: 30px;
      text-align: justify;
      h4 {
        text-align: left;
        color: $normal-text;
        text-indent: 0;
      }
      p {
        color: $normal-text;
      }
    }
    .about-image {
      max-width: 400px;
      margin: auto;
    }
  }
}
</style>
