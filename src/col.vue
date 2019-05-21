<template>
  <div class="col"
    :class="colClasses"
    :style="colStyle"
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
      gap: 0,
    }
  },
  computed: {
    colClasses() {
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gap/2 + 'px',
        paddingRight: this.gap/2 + 'px'
      }
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
