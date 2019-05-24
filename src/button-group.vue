<template>
  <div class="er-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'er-button-group',
  // 监测子元素是否出现问题
  mounted() {
    for(let node of this.$el.children) {
      if(node.nodeName.toLowerCase() !== 'button') {
        console.warn(`<er-button-group> 的子元素只能是 <er-button></er-button> ,但是你有输入 ${node.nodeName.toLowerCase()}`)
      }
    }
  }
}
</script>

<style lang="scss">
  $border-radius: 4px;
  .er-button-group {
    display: inline-flex;
    vertical-align: middle;
    .er-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
