<template>
  <div class="city">
     <CityHeader></CityHeader> 
     <CitySerch></CitySerch>
     <CityList :cities='cities' :hotCities='hotCities'></CityList>
     <CityAiphader :cities='cities'></CityAiphader>
  </div>
</template>

<script>
import axios from 'axios'
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
      cities:{},
      hotCities:[]
    }
  },
  methods: {
    getCityInfo(){
      axios.get("/api/city.json").then(this.getCityInfoSucc).catch(function(e){
        console.log(e);
      })
    },
    getCityInfoSucc(res){
      res=res.data;
      console.log(res.data);
      if(res.ret&&res.data){
        const data=res.data
        this.cities=data.cities;
        this.hotCities=data.hotCities
      }
      
    }
  },
  mounted() {
    this.getCityInfo();
  },
 }
</script>

<style lang="stylus" scoped>

</style>