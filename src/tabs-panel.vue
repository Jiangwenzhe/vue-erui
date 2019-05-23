<template>
  <div class="tabs-panel" :class="panelClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'er-tabs-panel',
  inject: ['eventBus'],
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    panelClass() {
      return {
        active: this.active
      }
    }
  },
  mounted() {
     this.eventBus.$on('update:selected', (name) => {
       this.active = name === this.name
    })
  }
}
</script>

