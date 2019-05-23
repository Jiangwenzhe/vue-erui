<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'er-tabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    if (this.$children.length === 0) {
        console && console.warn &&
        console.warn(`<er-tabs></er-tabs>的子组件应该是<er-tabs-header></er-tabs-header>和<er-tabs-body></er-tabs-body>，但你没有写子组件`)
      }
    this.$children.forEach(vm => {
      if(vm.$options.name === 'er-tabs-header') {
        vm.$children.forEach(tabsItem => {
          if(tabsItem.$options.name === 'er-tabs-item' && tabsItem.name === this.selected){
            this.eventBus.$emit('update:selected', this.selected, tabsItem)
          }
        })
      }
    })
  }
}
</script>

