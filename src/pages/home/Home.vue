<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper
  },
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
*{
  margin:0;
  padding :0;
  list-style:none;
  text-decoration:none
  box-sizing:border-box
}
body,html{
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>