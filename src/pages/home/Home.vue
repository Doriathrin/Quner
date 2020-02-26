<template>
  <div class="home">
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
export default {
  name: 'Home',
  components:{
    HomeHeader
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