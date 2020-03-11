<template>
  <div class="detail">
    <DetailBanner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    >
    </DetailBanner>
    <DetailHeader>
    </DetailHeader>
    <div class="content">
      <DetailList :list='list'></DetailList>
    </div>
  </div>
</template>

<script>
import DetailList from './components/List'
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[]
    }
  },
  methods: {
    getDetailInfo(){
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id,
        }
      })
      .then(this.getDetailInfoSucc)
      .catch(function(e){
        console.log(e);
      })
    },
    getDetailInfoSucc(res){
      console.log(res);
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        console.log(data.sightName);
        this.sightName=data.sightName
        this.bannerImg=data.bannerImg
        this.gallaryImgs=data.gallaryImgs
        this.list=data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo();
    console.log(this.getDetailInfo());
  },
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>