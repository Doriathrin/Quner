<template>
  <div>
    <div class="banner" @click="handldBannerClick">
      <img :src="bannerImg" alt="" class='banner-img'>
      <div class="banner-info">
        <div class="banner-title">
          <!-- 大连圣亚海洋世界(AAAA景区) -->
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class='iconfont arrow-icon'>
              &#xe643;
          </span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallary :imgs='gallaryImgs' v-show='showGallary' @close='handleGallaryClose'></CommonGallary>
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary';
import FadeAnimation from '../../../common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props:{
    sightName:String,
    bannerImg:String,
    gallaryImgs:Array
  },
  components:{
    CommonGallary,
    FadeAnimation,
  },
  data() { 
    return {
      // imgs:[
      //   "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
      //   "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      // ],
      showGallary:false,
    }
  },
  methods: {
    handldBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
 }
</script>

<style lang="stylus" scoped>
.banner
  position:relative
  overflow : hidden
  height:0
  padding-bottom:55%;
  .banner-img
    width:100%
  .banner-info
    display:flex
    position:absolute
    left:0
    right:0
    bottom:0
    line-height:0.6rem;
    color:#ffffff
    background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,255,255,0.8))
    .banner-title
      flex:1
      font-size:0.22rem;
      padding:0 0.2rem
    .banner-number
      height:0.32rem;
      line-height:0.32rem;
      margin-top:0.14rem;
      margin-left:auto;
      border-radius:0.2rem;
      background:rgba(0,0,0,0.8) 
      font-size:0.14rem;
      .banner-icon
        font-size:0.14rem;
</style>