<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'er-row',
  props: {
    gap: {
      type:[Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      let gap = this.gap
      return {
        marginLeft: -gap/2+'px',
        marginRight: -gap/2+'px'
      }
    },
    rowClass() {
      let align = this.align
      return [align && `align-${align}`]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      console.log(vm.$el)
      vm.gap = this.gap
    })
  }
}
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-center{
      justify-content: center;
    }
    &.align-right{
      justify-content: flex-end;
    }
  }

</style>
