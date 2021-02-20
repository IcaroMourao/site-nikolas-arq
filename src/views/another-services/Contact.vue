<template>
<div class="contact-container">
  <div class="contact-body">
    <div class="contact-form-container">
      <div class="contact-form-header">
        <h1 class="title">Contate-nos</h1>
      </div>
      <div class="contact-form-body">
        <form @submit.prevent="">
          <SimpleInput
            name="name"
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            v-model="formData.name"/>
          <SimpleInput
            name="email"
            label="Email"
            type="email"
            placeholder="Digite seu melhor email"
            v-model="formData.email"/>
          <SimpleInput
            name="phone"
            label="Telefone"
            type="text"
            placeholder="(99) 99999-9999"
            v-mask="'(##) #####-####'"
            v-model="formData.phone"/>
          <SimpleTextArea
            name="message"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            v-model="formData.message"/>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <b-row class="button-wrapper" no-gutters>
            <b-col cols="12" md="6" class="pr-2">
              <Button
                content="Voltar"
                type="outline"
                :expanded="true"
                :uppercase="true"
                :link="{ path: '/outros-servicos', append: true}"/>
            </b-col>
            <b-col cols="12" md="6" class="pl-2">
              <Button
                content="Enviar"
                type="primary"
                :expanded="true"
                :uppercase="true"
                :action="submit"/>
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SimpleInput from '@/components/SimpleInput.vue';
import SimpleTextArea from '@/components/SimpleTextArea.vue';
import Button from '@/components/Button.vue';
import { VueMaskDirective } from 'v-mask';

export default {
  name: 'Contact',
  components: {
    SimpleInput,
    SimpleTextArea,
    Button,
  },
  directives: {
    mask: VueMaskDirective,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    submit() {
      this.errorMessage = '';
      const formDataValues = Object.values(this.formData);
      if (formDataValues.some((field) => field === '')) {
        // this.errorMessage = 'Todos os campos são obrigatórios';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-container {
  background-color: $contact-bg;
  .contact-body {
    max-width: 1440px;
    max-height: 1080px;
    margin: auto;
    padding: 3rem 2rem;
    background: url('~@/assets/images/projects/project1/04.jpg') no-repeat bottom fixed;
  }
  .contact-form-container {
    max-width: 500px;
    max-height: 900px;
    margin: 0 auto;
    background-color: $white-ice;
    border-radius: 10px;
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,.25);
    padding: 2rem 0;
    .contact-form-header {
      padding-bottom: 2rem;
    }
    .contact-form-body {
      .button-wrapper {
        max-width: 370px;
        margin: auto;
      }
    }
  }
}
</style>
