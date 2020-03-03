<template>
  <div class="list-bscroll" ref='wrapper'>
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper" v-for='(item,key) of hotCities' :key='item.id'>
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for='(item,key) of cities' :key='key'>
        <div class="title border-topbottom" >
          {{key}}         
        </div>
        <div class="item-list">
          <div class="item border-bottom" v-for='(v,index) of item' :key='v.id'>
            {{v.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props:{
    cities:Object,
    hotCities:Array
  },
  data() { 
    return {

    }
  },
  methods: {

  },
  mounted() {
    this.sroll=new BScroll(this.$refs.wrapper);
  },
 }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
	&:before
		border-color: #ccc
	&:after
		border-color: #ccc
.border-bottom
	&:before
		border-color: #ccc

.list-bscroll
	overflow: hidden
	position: absolute
	top: 1.22rem
	left: 0
	right: 0
	bottom: 0 
	// background:red
	.title
		line-height: .54rem
		background: #eee
		padding-left: .2rem
		color: #666
		font-size: .26rem
	.button-list
		overflow: hidden
		padding: .1rem .6rem .1rem .1rem
		.button-wrapper
			float: left
			width: 33.33%
			.button
				margin: .1rem
				padding: .1rem 0
				text-align: center
				border: .02rem solid #ccc
				border-radius: .06rem
	.item-list
		.item
			line-height: .76rem
			padding-left: .2rem


</style>