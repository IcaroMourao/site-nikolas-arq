<template>
  <b-modal
    id="share-modal"
    :hide-footer="true"
    centered
    size="md"
    :title="`Compartilhar: ${project.name}`">

    <div class="share-modal-body">
      <div class="share-social-group">
        <a
          class="facebook-img"
          :href="`https://www.facebook.com/sharer/sharer.php?u=${link}`"
         target="_blank"/>
        <a
          class="pinterest-img"
          :href="`http://pinterest.com/pin/create/link/?url=${link}`"
          target="_blank"/>
        <a
          class="email-img"
          :href="`mailto:?subject=Projeto: ${project.name}&body=${mailBody}`"
          target="_blank"/>
      </div>

      <div key="project-link" v-if="link">
        <div class="info-container">
          <div class="info">{{ link }}</div>
          <div
            id="project-link"
            @click="copyToClipboard(link)"
            class="copy-area">
              <div class="copy-icon"/>
          </div>
        </div>
      </div>
    </div>

    <b-tooltip target="project-link" triggers="click">
      Copiado
    </b-tooltip>
  </b-modal>
</template>

<script>
export default {
  name: 'ShareModal',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    link() {
      return `http://${window.location.host}/projetos/${this.project.id}`;
    },
    mailBody() {
      return `Caro amigo, veja que projeto maravilhoso: ${this.link}`;
    },
  },
  methods: {
    copyToClipboard(data) {
      navigator.clipboard.writeText(data);
      setTimeout(() => {
        this.$root.$emit('bv::hide::tooltip', 'project-link');
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.share-modal-body {
  padding: 2rem 2rem 1rem 2rem;
  .share-social-group {
    display: flex;
    padding-bottom: 2rem;
    justify-content: center;
    .facebook-img {
      width: 36px;
      height: 36px;
      background: url('~@/assets/icons/projects/facebook.svg');
      background-size: 36px 36px;
      background-repeat: no-repeat;
      cursor: pointer;
    }
    .pinterest-img {
      margin-left: 2rem;
      width: 36px;
      height: 36px;
      background: url('~@/assets/icons/projects/pinterest.svg');
      background-size: 36px 36px;
      background-repeat: no-repeat;
      cursor: pointer;
    }
    .email-img {
      margin-left: 2rem;
      width: 36px;
      height: 36px;
      background: url('~@/assets/icons/projects/email.svg');
      background-size: 36px 36px;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
  .info-container {
    display: flex;
    margin-bottom: 2rem;
    justify-content: center;
    .info {
      width: 100%;
      color: $normal-text;
      background-color: $app-background;
      border: solid 1.5px $current;
      border-radius: 5px 0 0 5px;
      padding: .5rem;
      padding-right: 1.5rem;
      max-width: calc(100% - 120px);
      overflow: hidden;
    }
    .copy-area {
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: fit-content;
      background-color: $box-level1;
      border: solid 1.5px $box-level1;
      border-left: 0;
      border-radius: 0 5px 5px 0;
      padding: .5rem 1.25rem;
      font-weight: bold;
      .copy-icon {
        width: 24px;
        height: 24px;
        background: url('~@/assets/icons/copy.svg');
        background-size: 24px 24px;
        background-repeat: no-repeat;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
