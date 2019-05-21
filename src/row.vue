<template>
  <div class="row" :style="{marginLeft: -gap/2+'px', marginRight: -gap/2+'px'}">
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
    margin: 0 -10px;
  }
</style>
