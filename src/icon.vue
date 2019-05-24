<template>
  <svg class="er-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name: 'er-icon',
  props: ['name']
}
</script>

<style lang="scss" >
  .er-icon {
    width: 1em;
    height: 1em;
  }
</style>
