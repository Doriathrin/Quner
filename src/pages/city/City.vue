<template>
  <div class="city">
     <CityHeader></CityHeader> 
     <CitySerch></CitySerch>
     <CityList></CityList>
     <CityAiphader></CityAiphader>
  </div>
</template>

<script>
import CitySerch from './components/Search'
import CityHeader from './components/CityHeader'
import CityList from './components/List'
import CityAiphader from './components/AIphaber'
export default {
  name: 'City',
  components:{
    CityHeader,
    CitySerch,
    CityList,
    CityAiphader
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

</style>