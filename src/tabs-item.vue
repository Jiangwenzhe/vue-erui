<template>
  <div class="tabs-item" @click="changeTab" :class="itemClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'er-tabs-item',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  computed: {
    itemClass() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  methods: {
    changeTab () {
      if (this.disabled) return
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue: #1890ff;
  $disabled-text-color: #BFBFBF;
  .tabs-item {
    flex-shrink: 0;
    padding: .75em 1.1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.active {
      font-weight: bold;
      color: $blue;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
