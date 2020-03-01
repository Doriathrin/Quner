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
  data() { 
    return {
      swiperOption:{
        autopaly:false
      },
      iconList:[{
			id:"0001",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
			desc:"景点门票"
		},{
			id:"0002",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
			desc:"万隆滑雪"
		},{
			id:"0003",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
			desc:"故宫"
		},{
			id:"0004",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
			desc:"静之湖滑雪"
		},{
			id:"0005",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
			desc:"一日游"
		},{
			id:"0006",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
			desc:"古北水镇"
		},{
			id:"0007",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
			desc:"北京滑雪"
		},{
			id:"0008",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png",
			desc:"陶然亭公园"
		},{
			id:"0009",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
			desc:"泡温泉"
		},{
			id:"0010",
			imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
			desc:"中国马镇"
		}]  
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