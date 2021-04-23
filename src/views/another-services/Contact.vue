<template>
<div class="contact-container">
  <div class="contact-body">
    <div class="contact-form-container">
      <div class="contact-form-header">
        <h1 class="title">Contate-nos</h1>
      </div>
      <div class="contact-form-body">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="">
            <ValidationProvider name="name" rules="required" v-slot="{ errors, reset }">
              <SimpleInput
                name="name"
                label="Nome*"
                type="text"
                placeholder="Digite seu nome"
                :hasError="!!errors[0]"
                :errorMessage="errors[0]"
                v-on:reset-provider="reset"
                v-model="formData.name"/>
            </ValidationProvider>
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors, reset }">
              <SimpleInput
                name="email"
                label="Email*"
                type="email"
                placeholder="Digite seu melhor email"
                :hasError="!!errors[0]"
                :errorMessage="errors[0]"
                v-on:reset-provider="reset"
                v-model="formData.email"/>
            </ValidationProvider>
            <ValidationProvider name="phone" rules="required" v-slot="{ errors, reset }">
              <SimpleInput
                name="phone"
                label="Telefone*"
                type="text"
                placeholder="(99) 99999-9999"
                :hasError="!!errors[0]"
                :errorMessage="errors[0]"
                v-on:reset-provider="reset"
                v-mask="'(##) #####-####'"
                v-model="formData.phone"/>
            </ValidationProvider>
            <ValidationProvider name="message" rules="required" v-slot="{ errors, reset }">
              <SimpleTextArea
                name="message"
                label="Mensagem*"
                placeholder="Digite sua mensagem"
                :hasError="!!errors[0]"
                :errorMessage="errors[0]"
                v-on:reset-provider="reset"
                v-model="formData.message"/>
            </ValidationProvider>
            <div class="button-wrapper">
              <Button
                content="Enviar"
                type="primary"
                :isDisabled="invalid || isSendingMail"
                :expanded="true"
                :uppercase="true"
                :action="submit"/>
            </div>
          </form>
        </ValidationObserver>
        <p v-if="errorMessage" class="error-message text-danger">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message text-success">{{ successMessage }}</p>
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
import { mapActions } from 'vuex';

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
      successMessage: '',
      isSendingMail: false,
    };
  },
  methods: {
    ...mapActions({
      sendEmail: 'contact/sendEmail',
    }),
    submit() {
      this.errorMessage = '';
      this.validateData(this.formData);

      this.isSendingMail = true;
      if (!this.errorMessage) {
        this.sendEmail(this.formData)
          .then(() => {
            this.successMessage = 'Já recebi seu email, assim que possível entrarei em contato.';
            this.errorMessage = '';
            this.clearForm();
            this.scrollToMessage();
            this.isSendingMail = false;
          })
          .catch(() => {
            this.successMessage = '';
            this.errorMessage = 'Não consegui receber seu email, você poderia tentar o contato por outro canal?';
            this.scrollToMessage();
            this.isSendingMail = false;
          });
      }
    },
    validateData(data) {
      const formDataValues = Object.values(data);

      if (formDataValues.some((field) => field === '')) {
        this.errorMessage = 'Todos os campos são obrigatórios';
      }
    },
    clearForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
      };
    },
    scrollToMessage() {
      window.scroll(0, 0);
      window.scroll(0, 200);
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
    padding: 2rem;
    .contact-form-header {
      padding-bottom: 2rem;
      .title {
        font-size: 2rem;
        @media (min-width: map-get($grid-breakpoints, "md")) {
        font-size: 40px;
        }
      }
    }
    .contact-form-body {
      .button-wrapper {
        max-width: 370px;
        margin: auto;
        padding-top: 1rem;
      }
    }
  }
}
</style>
