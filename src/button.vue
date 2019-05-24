// @click="$emit('click')"的意思是：
<template>
  <button class="er-button" :class="[{[`icon-${iconPosition}`]: true}, primaryClass, disabledClass]"
    @click="$emit('click')">
    <er-icon v-if="icon && !loading"  class="icon" :name="icon"></er-icon>
    <er-icon name="loading" v-if="loading" class="loading icon"></er-icon>
    <div class="contentt">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  name: 'er-button',
  components: {
    'er-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return (value ==='left' || value ==='right')
      }
    },
     primary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    primaryClass() {
      return {
        primary: this.primary
      }
    },
    disabledClass() {
      return {
        disabled: this.disabled
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $primary-color: #1890ff;
  $primary-hover-color: #40a9ff;
  $primary-active-color: #096dd9;
  $disabled-color: #999;
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $border-radius: 4px;
  $border-color: #999;
  $color: #333;
  $border-color-hover: #666;
  $button-active-bg: #eee;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .er-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      border-color: $border-color-hover;
    }
    &:active {
      background-color:$button-active-bg;
    }
    &:focus {
      outline: none;
    }
    &.primary {
      background: $primary-color;
      color: #fff;
      border-color: $primary-color;
      &:hover {
        background: $primary-hover-color;
        border-color: $primary-hover-color;
      }
      &:active {
        background: $primary-active-color;
        border-color: $primary-active-color;
      }
    }
    &.disabled {
      cursor: not-allowed;
      color: $disabled-color;
      border-color: $disabled-color;
      background: #fff;
    }
    .contentt {
      order: 2;
    }
    .icon {
      order: 1;
      margin-right: .1em;
    }
    &.icon-right {
      .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
      .contentt {
      order: 1;
      }
    }
    .loading {
      animation: spin .7s infinite linear;
    }
  }
</style>