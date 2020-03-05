<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList='swiperList'></HomeSwiper>
    <HomeIcons :iconList='iconList'></HomeIcons>
    <Recommend :recommendList='recommendList'></Recommend>
    <HomeWeekend :weekendList='weekendList'></HomeWeekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import Recommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    HomeWeekend
  },
  data() { 
    return {
      // city:'',
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc).catch(function(error){
        console.log(error);
      })
    },
    getHomeInfoSucc(res){
      console.log(res);
      // if(res.ret&&res.data){
        console.log(res.data.data.city);
        this.city=res.data.data.city
        this.swiperList=res.data.data.swiperList
        this.iconList=res.data.data.iconList
        this.recommendList=res.data.data.recommendList
        this.weekendList=res.data.data.weekendList 
      // } 
    }
  },
  mounted() {
    console.log('mounted');
    this.lastCity=this.city
    this.getHomeInfo()
  },
  activated() {
    // activated组件活动的时候激活
    if(this.lastCity!==this.city){
      this.lastCity=this.city
      this.getHomeInfo()
    }
    console.log('activated');
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