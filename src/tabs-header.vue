<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: 'er-tabs-header',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (tabName, tabsItem)=>{
      let {width, height, top, left} = tabsItem.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: #1890ff;
  $border-color: #EBEDF0;
  .tabs-header {
    display: flex;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1.1em;
    }
    .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $blue;
      transition: all .3s;
    }
  }
</style>
