<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'er-row',
  props: {
    gap: {
      type:[Number, String]
    }
  },
  computed: {
    rowStyle() {
      let gap = this.gap
      return {
        marginLeft: -gap/2+'px',
        marginRight: -gap/2+'px'
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gap = this.gap
    })
  }
}
</script>

<style lalng="scss" scoped>
  .row {
    display: flex;
  }
</style>
