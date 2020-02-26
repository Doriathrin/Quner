<template>
  <div class="home-section">
    <section>
      <div class='lwq-banner'>
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg" >
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg" >
          </swiper-slide>
            
          <!-- Optional controls -->
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
       swiperOption:{}
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