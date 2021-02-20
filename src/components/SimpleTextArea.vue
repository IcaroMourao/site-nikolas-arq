<template>
  <div>
    <label>
      <span>{{ label }}</span>
      <textarea
        :name="name"
        :cols="cols"
        :rows="rows"
        :value="content"
        @input="update"
        :placeholder="placeholder"
        :maxlength="maxlength"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'SimpleTextArea',
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cols: {
      type: Number,
      default: 40,
    },
    rows: {
      type: Number,
      default: 5,
    },
    placeholder: {
      type: String,
      default: '',
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
  textarea {
    display: block;
    appearance: none;
    width: 100%;
    max-height: 300px;
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
