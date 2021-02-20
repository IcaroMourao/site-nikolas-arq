<template>
  <div>
    <label>
      <span>{{label}}</span>
      <input
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
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    update(e) {
      this.$emit('input', e.target.value);
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
  span {
    color: $current;
    margin-bottom: 0.375rem;
    display: block;
    text-align: left;
    font-weight: bold;
    font-size: 0.625rem;
    text-transform: uppercase;
  }
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
  }
}

@media (min-width: map-get($grid-breakpoints, "md")) {
  label input {
    padding: 10px 15px;
  }
}
</style>
