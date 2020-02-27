<template>
  <div class="home-Swiper">
      <div class='lwq-banner' >
        <swiper :options="swiperOption">
          <swiper-slide v-for='item of swiperList' @key='item.id'>
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
  data() { 
    return {
       swiperOption:{
          pagination: '.swiper-pagination',
          loop: true,
      },
       swiperList:[{
        id:"0001",
        imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg"
      },{
        id:"0002",
        imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg"
      }]
    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="stylus" scoped>
.lwq-banner
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 27.1%
  background: #eee
  .swiper-img
        width : 100%
</style>