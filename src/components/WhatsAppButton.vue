<template>
  <div class="whats-app-button" @click="wappAction">
    <div class="whats-app-icon" />
  </div>
</template>

<script>
export default {
  name: 'WhatsAppButton',
  methods: {
    wappAction() {
      window.open('https://api.whatsapp.com/send?phone=5561994396832&text=Ol%C3%A1,%20podemos%20conversar%20sobre%20um%20projeto%20arquitet%C3%B4nico?', '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.whats-app-button {
    position: fixed;
    right: 15px;
    bottom: 25px;
    height: 70px;
    width: 70px;
    background-color: $light;
    border-radius: 100%;
    z-index: 999;
    box-shadow: 0px 6px 6px 0px rgba(0,0,0,.16);
    .whats-app-icon {
      position: absolute;
      left: calc(50% - 15px);
      top: calc(50% - 15px);
      width: 30px;
      height: 30px;
      background: url('../assets/icons/whatsapp.svg');
      background-size: 30px 30px;
      background-repeat: no-repeat;
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
