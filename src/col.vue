<template>
  <div class="col"
    :class="colClasses"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
const validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if(!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}

export default {
  name: 'er-col',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator,
    },
    pad: {
      type: Object,
      validator,
    },
    spc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    bpc: {
      type: Object,
      validator,
    },

  },
  data() {
    return {
      gap: 0,
    }
  },
  computed: {
    colClasses() {
      let { span, offset, phone, pad, spc, pc, bpc } = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone ? [`col-phone-${phone.span}`]: []),
        ...(pad ? [`col-pad-${pad.span}`]: []),
        ...(spc ? [`col-small-pc-${spc.span}`]: []),
        ...(pc ? [`col-pc-${pc.span}`]: []),
        ...(bpc ? [`col-big-pc-${bpc.span}`]: []),
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

    // 为手机大小的屏幕匹配的class
    @media (max-width: 576px) {
      $class-prefix: col-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%
        }
      }
      $class-prefix: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }

    // 为pad大小的屏幕匹配的class
    @media (min-width: 577px) and (max-width: 768px) {
      $class-prefix: col-pad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%
        }
      }
      $class-prefix: offset-pad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }

    // 为小电脑匹配的 class
    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-small-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%
        }
      }
      $class-prefix: offset-small-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }

    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%
        }
      }

      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-big-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%
        }
      }
      $class-prefix: offset-big-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }
  }
</style>
