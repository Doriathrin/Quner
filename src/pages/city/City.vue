<template>
  <div class="city">
     <CityHeader></CityHeader> 
     <CitySerch :cities='cities'></CitySerch>
     <CityList :cities='cities' :hotCities='hotCities' :letter='letter'></CityList>
     <CityAiphader :cities='cities' @change="handleLetterClick"></CityAiphader>
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
      hotCities:[],
      letter:""
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
    },
    handleLetterClick(data){
      console.log(data);
      this.letter=data
    }  
  },
  mounted() {
    this.getCityInfo();
  },
 }
</script>

<style lang="stylus" scoped>

</style>