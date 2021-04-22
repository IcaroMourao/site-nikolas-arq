<template>
  <div>
    <label>
      <div class="label-title-wrapper">
        <span class="label-title">{{ label }}</span>
        <span v-if="hasError" class="input-error-message">{{ errorMessage }}</span>
      </div>
      <input
        :class="{ 'input-error': hasError }"
        :type="type"
        :name="name"
        ref="input"
        @input="update"
        :value="content"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :maxlength="maxlength"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'SimpleInput',
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
    },
    maxlength: {
      type: String,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    update(e) {
      this.$emit('input', e.target.value);
      this.content = e.target.value;
    },
  },
  watch: {
    value(newValue) {
      this.$emit('input', newValue);
      this.content = newValue;

      if (newValue === '') {
        this.$emit('reset-provider');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  max-width: 370px;
  margin: auto;
}
label {
  display: block;
  margin-bottom: 1.25rem;
  input {
    display: block;
    appearance: none;
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 8px 15px;
    border-radius: 0.4rem;
    background-color: $bg-input;
    outline: none;
    font-size: 1rem;
    color: $normal-text;
    &.input-error {
      border: 1px solid $danger;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "md")) {
  label input {
    padding: 10px 15px;
  }
}
</style>
