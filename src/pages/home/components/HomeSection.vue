<template>
  <div class="home-section">
    <section>
      <div class='lwq-banner' v-for='item of swiperList' @key='item.id'>
        <swiper :options="swiperOption" >
          <!-- slides -->
          <swiper-slide>
            <img class="swiper-img" :src="item.imgUrl" >
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" :src="item.imgUrl" >
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div>test</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeSection',
  data() { 
    return {
       swiperOption:{},
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
  padding-bottom: 170%
  background: #eee
</style>