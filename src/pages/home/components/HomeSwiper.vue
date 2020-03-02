<template>
  <div class="home-Swiper">
      <div class='lwq-banner' v-if='swiperList.length'>
        <swiper :options="swiperOption"> 
          <swiper-slide v-for='item of swiperList'>
            <img class="swiper-img" :src="item.imgUrl" >
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:{
    swiperList:Array
  },
  data() { 
    return {
       swiperOption:{
          pagination: '.swiper-pagination',
          loop: true,
      },
    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="stylus" scoped>
.home-Swiper >>> .swiper-pagination-bullet-active
  background: red
.lwq-banner
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 29%
  background: #eee
  .swiper-img
        width : 100%
</style>