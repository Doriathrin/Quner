<template>
  <transition>
    <!-- 谁要做动画  就用transition包裹 -->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation',
  data() { 
    return {
      show:true
    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="stylus" scoped> 
  .v-enter, .v-leave-to
    opacity :0
  .v-enter-action, .v-leave-active
    transition :opacity 1s
</style>