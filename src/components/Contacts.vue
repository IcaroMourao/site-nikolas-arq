<template>
  <b-row class="contacts-container" no-gutters>
    <b-col class="contact-item" cols="12" lg="4">
      <svg xmlns="http://www.w3.org/2000/svg" width="74" height="72" viewBox="0 0 74 72" class="triangle-bl"><g fill="#12B2B2" fill-rule="nonzero"><path d="M0 72V0l37 36z" opacity=".15"></path><path d="M37 72V35l37 37z" opacity=".05"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="142" height="143" viewBox="0 0 142 143" class="triangle-tr"><g fill="#12B2B2" fill-rule="nonzero"><path d="M71 71H0l35.5-35zM142 143H71l35.5-36z" opacity=".15"></path><path d="M0 0h71L35.5 36zM71 71h71l-35.5 36z" opacity=".05"></path><path d="M142 0v71L71 0z" opacity=".15"></path></g></svg>
      <div class="contact-text-container">
        <p class="contact-text-title">Tenho interesse em</p>
        <p class="contact-text-description">Fazer um projeto</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="transform:rotate(180deg);" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
      </div>
    </b-col>
    <b-col class="contact-item consulting" cols="12" lg="4">
      <svg xmlns="http://www.w3.org/2000/svg" width="141" height="144" viewBox="0 0 141 144" class="triangle-tr"><g fill="#FFBF68" fill-rule="nonzero"><path d="M70 0h71l-35.5 35z" opacity=".15"></path><path d="M141 71H70l35.5-36z" opacity=".3"></path><path d="M0 71V0l70 71zM141 71v73L70 71z" opacity=".15"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="111" height="73" viewBox="0 0 111 73" class="triangle-br"><g fill="#FFBF68" fill-rule="evenodd"><path d="M111 73H36l37.5-37z" opacity=".3"></path><path d="M36 0h75L73.5 36zM36 0v73L0 36.5z" opacity=".15"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="71" viewBox="0 0 36 71" class="triangle-tl"><path fill="#FFBF68" fill-rule="nonzero" d="M0 71.064v-71l36 35.5z" opacity=".15"></path></svg>
      <div class="contact-text-container">
        <p class="contact-text-title consulting">Tenho interesse em</p>
        <p class="contact-text-description">Fazer uma consultoria</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="transform:rotate(180deg);" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
      </div>
    </b-col>
    <b-col class="contact-item publicity" cols="12" lg="4">
      <svg xmlns="http://www.w3.org/2000/svg" width="141" height="71" viewBox="0 0 141 71" class="triangle-tl"><g fill="#7654CC" fill-rule="nonzero"><path d="M70 0h71L70 71zM0 0v71l35-35.5z" opacity=".1"></path><path d="M70 71V0L35 35.5z" opacity=".2"></path></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145" viewBox="0 0 146 145" class="triangle-br"><g fill="#7654CC" fill-rule="nonzero"><path d="M74 0v72l36-36zM0 145h74l-37-37z" opacity=".1"></path><path d="M146 72V0l-36 36zM73 72H1l36 36z" opacity=".2"></path><path d="M146 72H74l72 72z" opacity=".1"></path></g></svg>
      <div class="contact-text-container">
        <p class="contact-text-title publicity">Quero parceria para</p>
        <p class="contact-text-description">Publicidade</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="transform:rotate(180deg);" class="arrow"><path fill-rule="evenodd" d="M7.5 15L0 7.5 7.5 0l1.325 1.325-5.232 5.254H15v1.842H3.593l5.232 5.254z"></path></svg>
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
@keyframes arrow-shake {
  0% {
    transform: translate(0%) rotate(180deg);
  }
  50% {
    transform: translate(20px) rotate(180deg);
  }
  100% {
    transform: translate(0%) rotate(180deg);
  }
}

.contacts-container {
  position: relative;
  z-index: 10;
  background-color: #fff;
  display: flex;
  margin-top: -6px;
  .contact-item {
    cursor: pointer;
    position: relative;
    background-color: rgba(18, 178, 178, 0.2);
    width: 100%;
    height: 180px;
    @media (min-width: map-get($grid-breakpoints, "lg")) {
      height: 325px;
    }
    &.consulting {
      background-color: rgba(255, 191, 104, 0.2);
    }
    &.publicity {
      background-color: rgba(118, 84, 204, 0.2);
    }
    &:hover .arrow{
      animation-name: arrow-shake;
      animation-duration: 1.25s;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
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
      padding: 45px 0 0 50px;
      @media (min-width: map-get($grid-breakpoints, "lg")) {
        padding: 130px 20px 96px 70px;
      }
      .contact-text-title {
        margin-bottom: 10px;
        color: #12b2b2;
        font-size: .875em;
        font-weight: 700;
        line-height: normal;
        word-wrap: break-word;
        &.consulting {
          color: #ffbf68;
        }
        &.publicity {
          color: #7654cc;
        }
      }
      .contact-text-description {
        margin-bottom: 12px;
        font-size: 1.5em;
        font-weight: 700;
        word-wrap: break-word;
      }
      .arrow {
        height: 18px;
        width: 18px;
      }
    }
  }
}
</style>
