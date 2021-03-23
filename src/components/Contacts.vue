<template>
  <b-row class="contacts-container" no-gutters>
    <b-col class="contact-item" cols="12" lg="6">
      <svg xmlns="http://www.w3.org/2000/svg" width="74" height="72" viewBox="0 0 74 72" class="triangle-bl"><g fill="#a1a1a1" fill-rule="nonzero"><path d="M0 72V0l37 36z" opacity=".15"></path><path d="M37 72V35l37 37z" opacity=".05"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="142" height="143" viewBox="0 0 142 143" class="triangle-tr"><g fill="#a1a1a1" fill-rule="nonzero"><path d="M71 71H0l35.5-35zM142 143H71l35.5-36z" opacity=".15"></path><path d="M0 0h71L35.5 36zM71 71h71l-35.5 36z" opacity=".05"></path><path d="M142 0v71L71 0z" opacity=".15"></path></g></svg>
      <div class="contact-text-container">
        <img src="@/assets/images/home/graphic-tool.png" alt="NM Arquitetura">
        <p class="contact-text-title">Projeto</p>
        <p class="contact-text-description">
          Trabalhamos com projetos de arquitetura e interiores
          para todo o Brasil. Entre em contato! <br/>
          Ficaremos felizes em atendê-lo:
        </p>
        <div class="service-link-wrapper">
          <router-link
            class="service-link"
            to="/outros-servicos/contato">
              Contate-nos >
          </router-link>
        </div>
      </div>
    </b-col>
    <b-col class="contact-item consulting" cols="12" lg="6">
      <svg xmlns="http://www.w3.org/2000/svg" width="141" height="144" viewBox="0 0 141 144" class="triangle-tr"><g fill="#ffffff" fill-rule="nonzero"><path d="M70 0h71l-35.5 35z" opacity=".15"></path><path d="M141 71H70l35.5-36z" opacity=".3"></path><path d="M0 71V0l70 71zM141 71v73L70 71z" opacity=".15"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="111" height="73" viewBox="0 0 111 73" class="triangle-br"><g fill="#ffffff" fill-rule="evenodd"><path d="M111 73H36l37.5-37z" opacity=".3"></path><path d="M36 0h75L73.5 36zM36 0v73L0 36.5z" opacity=".15"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="71" viewBox="0 0 36 71" class="triangle-tl"><path fill="#ffffff" fill-rule="nonzero" d="M0 71.064v-71l36 35.5z" opacity=".15"></path></svg>
      <div class="contact-text-container">
        <img src="@/assets/images/home/speech-bubble.png" alt="NM Arquitetura">
        <p class="contact-text-title consulting">Consultoria</p>
        <p class="contact-text-description consulting">
          É uma ótima solução para aqueles que querem dar uma
          renovada no ambiente, sem obras, sem demorar muito e sem gastar além do que imaginou.
          Entre em contato! <br/>
          Ficaremos felizes em atendê-lo:
        </p>
        <div class="service-link-wrapper">
          <router-link
            class="service-link consulting"
            to="/outros-servicos/contato">
              Contate-nos >
          </router-link>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
.contacts-container {
  position: relative;
  background-color: #fff;
  display: flex;
  .contact-item {
    position: relative;
    background-color: #EDEDED;
    width: 100%;
    height: 450px;
    &.consulting {
      background-color: #2F3851;
    }
    .triangle-bl {
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .triangle-br {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .triangle-tl {
      position: absolute;
      left: 0;
      top: 0;
    }
    .triangle-tr {
      position: absolute;
      right: 0;
      top: 0;
    }
    .contact-text-container {
      position: relative;
      height: 100%;
      padding: 2rem;
      max-width: 470px;
      margin: auto;
      text-align: center;
      img {
        max-width: 20%;
        padding: 2rem 0;
      }
      .contact-text-title {
        margin-bottom: 10px;
        color: #12b2b2;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: normal;
        word-wrap: break-word;
        &.consulting {
          color: #ffffff;
        }
      }
      .contact-text-description {
        margin-bottom: 12px;
        font-size: 1rem;
        font-weight: normal;
        word-wrap: break-word;
        &.consulting {
          color: #f5f5f5;
        }
      }
      .service-link-wrapper {
        position: absolute;
        left: 40%;
        bottom: 55px;
        text-align: center;
        .service-link {
          color: $current;
          &.consulting {
            color: #f5f5f5f5;
          }
        }
      }
    }
  }
}
</style>
