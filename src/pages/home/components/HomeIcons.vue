<template>
  <div class="home-icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page,index) of pages' :key='index'>
        <div class='icon' v-for='item of page' :key='item.id'>
          <div class="icon-img" >
            <img class='icon-img-content' :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props:{
    iconList:Array
  },
  data() { 
    return {
      swiperOption:{
        autopaly:false
      },
    }
  },
  methods: {

  },
  mounted() {
    
  },
  computed: {//监听页码
    pages(){
      const pages=[]
      //page当前下标的数据应该展示在轮播图的第几页   index是3 下标是2  Math.floor(2/8)向下取整为0  Math.floor(8/8)向下取整为1
      this.iconList.forEach((item,index)=>{
        const page=Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages
    }
  },
 }
</script>

<style lang="stylus" scoped>
.home-icons >>> .swiper-container
    height : 0
    padding-bottom: 50%
.home-icons
  overflow hidden
  height:0
  padding-bottom:50%
  // background:green
  .icon
    position: relative
    overflow:hidden
    float:left
    width:25%
    padding-bottom:25%
    // background:red
    .icon-img
      position absolute
      top:0
      left:0
      right:0
      bottom:0.44rem
      // background:blue
      box-sizing:border-box
      padding:0.05rem;
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color:#333
            font-size:0.2rem;
</style>