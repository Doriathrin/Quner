<template>
  <div class="list-bscroll" ref='wrapper'>
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list" >
          <div class="button-wrapper" v-for='(item,key) of hotCities' :key='item.id' @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for='(item,index) in cities' :key='index' :ref='index'>
        <div class="title border-topbottom" >
          {{index}}         
        </div>
        <div class="item-list">
          <div class="item border-bottom" v-for='(v,index) of item' :key='v.id' @click="handleCityClick(v.name)">
            {{v.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props:{
    cities:Object,
    hotCities:Array,
    letter:String
  },
  data() { 
    return {

    }
  },
  computed: {
    ...mapState({
      currentCity:'city'
    })
  },
  methods: {
    handleCityClick(city){
      // this.$store.commit('changCtiyValue',city);
      this.changCtiyValue(city);
      this.$router.push('/');
    },
    ...mapMutations(['changCtiyValue'])
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter(){
      console.log(this.letter);
      if(this.letter){
        const element=this.$refs[this.letter][0];
        console.log(element);
        this.scroll.scrollToElement(element)
      }
    }
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
	top: 1.5rem
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