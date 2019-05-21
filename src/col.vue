<template>
  <div class="col"
    :class="[`col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gap/2 +'px', paddingRight: gap/2+ 'px'}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'er-col',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      gap: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    width: 50%;
    border: 1px solid red;

    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
</style>
