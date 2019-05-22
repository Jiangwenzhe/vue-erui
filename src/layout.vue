<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'er-layout',
  data() {
    return {
      layoutClass: {
        layoutHasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if(vm.$options.name === 'er-sider') {
        this.layoutClass.layoutHasSider = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.layoutHasSider {
      flex-direction: row;
    }
  }
</style>
