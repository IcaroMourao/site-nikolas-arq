import { required, email } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('email', {
  ...email,
  message: 'Email inválido',
});

extend('required', {
  ...required,
  message: 'Esse campo é obrigatório',
});

extend('cellPhone', {
  validate(value) {
    return value.length === 13;
  },
  message: 'Preencha seu número corretamente',
});
