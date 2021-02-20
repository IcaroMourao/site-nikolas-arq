<template>
  <div class="wrapper" :style="wrapperstyle" :class="{'btn-expanded': expanded}">
    <template v-if="link">
      <router-link
        :to="!actionDisabled ? link : ''"
        class='base-style'
        :class="[
          type,
          {
            'btn-expanded': expanded,
            'disabled': isDisabled,
            'requesting': isRequesting,
            'requesting-removal': isRequestingRemoval,
            'text-uppercase': uppercase,
          },
        ]">
          <div>
            <slot name="text-left"></slot>
            <slot name="text-center">
              <img :src="icon" v-if="icon" alt="icon"/>
              <span class="text-center-style"> {{ content }} </span>
            </slot>
            <slot name="text-right"></slot>
          </div>
      </router-link>
    </template>
    <template v-else-if="typeof action === 'function'">
      <button
        class="base-style"
        :class="[
          type,
          {
            'btn-expanded': expanded,
            'disabled': isDisabled,
            'requesting': isRequesting,
            'requesting-removal': isRequestingRemoval,
            'text-uppercase': uppercase
          },
        ]"
        :style="inlinestyle"
        @click.prevent="(!actionDisabled ? action : () => false)">
        <div>
          <slot name="text-left"></slot>
          <slot name="text-center">
            <img :src="icon" v-if="icon" alt="icon"/>
            <span class="text-center-style"> {{ content }} </span>
          </slot>
          <slot name="text-right"></slot>
        </div>
      </button>
    </template>
    <template v-else>
      <button
        class="base-style disabled"
        :class="{
          'btn-expanded': expanded,
          'text-uppercase': uppercase
        }">{{ content }}</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
    },
    content: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isRequesting: {
      type: Boolean,
      default: false,
    },
    isRequestingRemoval: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Object,
    },
    action: {
      type: Function,
    },
    wrapperstyle: {
      type: String,
      default: '',
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    inlinestyle: {
      type: String,
      default: '',
    },
  },
  computed: {
    actionDisabled() {
      return this.isDisabled || this.isRequesting || this.isRequestingRemoval;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin btnGradient($direction, $colorStart, $colorStop) {
  background-image: linear-gradient($direction, $colorStart, $colorStop);
  &:hover {
    background-image: linear-gradient($direction, $colorStop, $colorStart);
  }
}

.wrapper {
  display: inline-block;
  img {
    max-height: 24px;
    display: inline-block;
  }
}

.btn-expanded {
  width: 100% !important;
}

.base-style {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: .5rem .65rem;
  border-radius: .4rem;
  color: $highlight;
  font-size: .75rem;
  text-decoration: none;
  outline: none;
  border: none;
  font-weight: bold;
  span {
    vertical-align: middle;
  }
  &.primary {
    color: $primary-button-text;
    border-color: $primary;
    @include btnGradient($gradient-direction, $primary-gradient-start, $primary);
    &:hover {
      background-image: none;
      background-color: $anchor;
    }
  }
  &.danger {
    border-color: $danger;
    @include btnGradient(to bottom, $danger, $danger-gradient-end);
  }
  &.disabled {
    background-image: none !important;
    background-image: linear-gradient(to bottom, $primary-gradient-start, $primary) !important;
    opacity: 0.55;
    color: $disabled-button-text !important;
    cursor: default;
  }
  &.requesting {
    background-image: none !important;
    background-color: $anchor !important;
    cursor: default;
    img {
      max-height: 20px !important;
    }
  }
  &.requesting-removal {
    background-image: linear-gradient(to bottom, $danger-gradient-end, $danger) !important;
    img {
      max-height: 20px !important;
    }
  }
  &.outline {
    color: $normal-text;
    background-color: transparent;
    box-shadow: 0 0 0 2px $normal-text inset;
    &:hover {
      color: $white-ice;
      background-color: $current;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "lg")) {
  .base-style {
    min-width: 140px;
  }
}
</style>
