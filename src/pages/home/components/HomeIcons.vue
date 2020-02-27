<template>
  <div class="home-icons">
    <div class='icon'>
      <div class="icon-img">
        <img class='icon-img-content' src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() { 
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="stylus" scoped>
.home-icons
  overflow hidden
  height:0
  padding-bottom:50%
  background:green
  .icon
    float:left
    width:25%
    padding-bottom:25%
    background:red
</style>