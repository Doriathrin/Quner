<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSection></HomeSection>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSection from './components/HomeSection'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSection
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