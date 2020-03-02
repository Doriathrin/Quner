<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-back">&#xeb99;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
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
@import '~styles/varibles.styl';
.header
  position:relative
  overflow:hidden
  height:$headerHeight
  line-height:$headerHeight
  text-align:center
  color:#fff
  background:$bgColor
  font-size:0.2rem;
  .header-back
    position:absolute
    top:0
    left:0
    width:0.64rem
    text-align:center
    font-size:0.2rem;
    color:#fff
</style>